/*
 * @Date: 2020-07-24 11:26:11
 * @LastEditors: 刘亚雄
 * @desc：使用到的一些interface和type
 */
import { PropType, FunctionalComponentOptions } from 'vue';
import { TemplateId, WidgetId, AbandonedWidgetId, WidgetVersion } from './config';

/**
 * Basic
 * @description 基本的props和接口
 */
export interface Resource {
    dataKey: string;
    defaultValue?: string;
    value?: string;
    title: {
        default: string;
    };
    desc: {
        default: string;
    };
    resolution?: string;
    valueList?: {
        name: string;
        value: string;
    }[];
    //
    widgetId?: string;
}
export interface RootProps {
    widgetId: TemplateId;
    uiElement: Template;
    deviceId: string;
    model: string;
    state: number;
    version: WidgetVersion;
}
export const RootPropsData = {
    uiElement: Object as PropType<Template>,
    widgetId: String as PropType<TemplateId>,
    version: String as PropType<WidgetVersion>,
    deviceId: String,
    model: String,
    state: Number,
};

/**
 * Abandoned Widget
 * @description 即将废弃的widgets。比如情景模式和动态序列，这些和资源值其实没有关系，但是也属于设备控制和设置范畴
 */
export interface AbandonedWidget {
    uiElement: Resource[];
    widgetId: AbandonedWidgetId;
}

/**
 * Template
 * @description 模板。里面是一些widget的集合，
 */
export interface Template {
    uiElement: Array<Widget | AbandonedWidget>;
    widgetId: TemplateId;
}
export interface TemplateProps {
    uiElement: Widget;
    deviceId: string;
    model: string;
    state: number;
    version: WidgetVersion;
}
export const TemplatePropsData = {
    uiElement: Object as PropType<Widget>,
    deviceId: String,
    model: String,
    state: Number,
    version: String as PropType<WidgetVersion>,
};

/**
 * Widget
 * @description 基础widget
 */
export interface Widget extends Resource {
    uiElement: Resource[];
    widgetId: WidgetId;
}

export type WidgetVersionDict = Record<
    WidgetVersion,
    Record<WidgetId, () => FunctionalComponentOptions<any>>
>;

export interface WidgetProps {
    widgetId: WidgetId;
    version: WidgetVersion;
    deviceId: string;
    model: string;
    state: number;
    resource: Resource;
}
export const WidgetPropsData = {
    deviceId: String,
    model: String,
    state: Number,
    widgetId: String as PropType<WidgetId>,
    version: String as PropType<WidgetVersion>,
    resource: Object as PropType<Resource>,
};

// export interface Resource {
//     dataKey: string;
//     defaultValue?: string;
//     value?: string;
//     title: {
//         default: string;
//     };
//     desc: {
//         default: string;
//     };
// }
export interface WidgetCallback {
    change: () => {};
}
