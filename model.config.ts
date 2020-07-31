/*
 * @Date: 2020-07-24 17:10:46
 * @LastEditors: 刘亚雄
 */
import { WidgetVersionDict } from './type';

export type TemplateVersion = '1.0';
export type WidgetVersion = '1.0';

export const WidgetsDicts: WidgetVersionDict = {
    '1.0': {
        InputR: () => require('./widgets/version1.0/input/input_r.vue').default,
        InputRW: () => require('./widgets/version1.0/input/input_rw.vue').default,
        NumberR: () => require('./widgets/version1.0/number/number_rw.vue').default,
        NumberRW: () => require('./widgets/version1.0/number/number_rw.vue').default,
        PickerR: () => require('./widgets/version1.0/picker/picker_rw.vue').default,
        PickerRW: () => require('./widgets/version1.0/picker/picker_rw.vue').default,
        SliderR: () => require('./widgets/version1.0/slider/slider_rw.vue').default,
        SliderRW: () => require('./widgets/version1.0/slider/slider_rw.vue').default,
        SwitchR: () => require('./widgets/version1.0/switch/switch_rw.vue').default,
        SwitchRW: () => require('./widgets/version1.0/switch/switch_rw.vue').default,
    },
};
export const TemplateDicts: any = {
    default: () => require('./template/default/default.vue').default,
};

export type TemplateName =
    | 'InputR'
    | 'InputRW'
    | 'NumberR'
    | 'NumberRW'
    | 'NumberRW'
    | 'PickerR'
    | 'PickerRW'
    | 'SliderR'
    | 'SliderRW'
    | 'SwitchR'
    | 'SwitchRW';

export type WidgetName =
    | 'InputR'
    | 'InputRW'
    | 'NumberR'
    | 'NumberRW'
    | 'NumberRW'
    | 'PickerR'
    | 'PickerRW'
    | 'SliderR'
    | 'SliderRW'
    | 'SwitchR'
    | 'SwitchRW';
