/*
 * @Date: 2020-07-23 19:06:43
 * @LastEditors: 刘亚雄
 * @desc：render一个template，里面装的是widget
 */
import Vue, { CreateElement } from 'vue';
import { RenderContext } from 'vue/types/options';
import { RootProps, RootPropsData } from './type';
import { TemplateDicts } from './config';
import polyfillWidgetConfig from './polyfill';
export const polyfill = polyfillWidgetConfig;

interface Context extends RenderContext {
    props: RootProps;
}

// Template
export default Vue.extend<RootProps>({
    name: 'Template',
    props: RootPropsData,
    functional: true,
    render(h: CreateElement, context: Context) {
        const { uiElement, widgetId, version } = context.props;

        const { deviceId, model, state } = context.props;
        // 这里在我们选定一个template的时候，我们是默认已经知道里面的结构的
        // template没有version，有需要的时候新增template
        const target = TemplateDicts[widgetId] ? TemplateDicts[widgetId] : TemplateDicts.default;
        return h(target(), {
            style: {
                margin: '10px',
            },
            props: {
                // 来自设备
                deviceId,
                model,
                state,
                // 来组widget
                uiElement,
                version,
            },
        });
    },
});
