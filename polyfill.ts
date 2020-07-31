/*
 * @Date: 2020-07-24 17:10:46
 * @LastEditors: 刘亚雄
 */
import { Template, AbandonedWidget, Widget, Resource } from './type';
import { TemplateId, AbandonedWidgetId } from './config';

export default function polyfillWidgetConfig(widgets: Array<Widget | AbandonedWidget>) {
    const result: Template[] = [];
    // 针对情景模式，动态序列
    const modes: Template = {
        uiElement: [],
        widgetId: 'sense_mode',
    };
    widgets.forEach((widget: Widget | AbandonedWidget) => {
        if (
            widget.widgetId === 'static-color' ||
            widget.widgetId === 'static-temp' ||
            widget.widgetId === 'static-light' ||
            widget.widgetId === 'dynamic-temp' ||
            widget.widgetId === 'dynamic-light' ||
            widget.widgetId === 'dynamic-color'
        ) {
            /**
             * 情景模式 & 动态序列
             */
            modes.uiElement.push(widget);
        } else if (
            widget.widgetId === 'xy-color-temp-light' ||
            widget.widgetId === 'color-temp-light' ||
            widget.widgetId === 'color'
        ) {
            /**
             * 灯具类控制
             */
            const idMap: {
                [k in AbandonedWidgetId]: TemplateId;
            } = {
                'xy-color-temp-light': 'xy_color_temp_light',
                'color-temp-light': 'temp_light',
                color: 'color_light',
                light: 'light',
            };
            widget.uiElement.forEach((resource) => {
                if (resource.resolution) {
                    // 说明是滑条

                    if (resource.maxValue == '370') {
                        resource.widgetId = 'temp_slider_rw';
                    } else {
                        resource.widgetId = 'slider_rw';
                    }
                } else if (resource.valueList) {
                    // 说明是开关或者下拉框
                    if (resource.valueList.length == 2) {
                        // 开关
                        resource.widgetId = 'switch_rw';
                    } else {
                        // 下拉框
                        resource.widgetId = 'slider_rw';
                    }
                } else if (resource.maxValue === '4278189823') {
                    resource.widgetId = 'temp_slider_rw';
                }
                console.log(888, resource);
            });
            result.push({
                uiElement: [widget],
                widgetId: idMap[widget.widgetId],
            });
        }
    });
    // 存入动态序列
    result.push(modes);
    console.log('转换完成之后的widget:', result);

    return result;
}
