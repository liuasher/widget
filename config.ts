/*
 * @Date: 2020-07-24 17:10:46
 * @LastEditors: 刘亚雄
 */
import { WidgetVersionDict } from './type';

export type WidgetVersion = '1.0';

export const WidgetsDicts: WidgetVersionDict = {
    '1.0': {
        input_r: () => require('./widgets/version1.0/input/input_r.vue').default,
        input_rw: () => require('./widgets/version1.0/input/input_rw.vue').default,
        number_r: () => require('./widgets/version1.0/number/number_rw.vue').default,
        number_rw: () => require('./widgets/version1.0/number/number_rw.vue').default,
        picker_r: () => require('./widgets/version1.0/picker/picker_rw.vue').default,
        picker_rw: () => require('./widgets/version1.0/picker/picker_rw.vue').default,
        slider_r: () => require('./widgets/version1.0/slider/slider_rw.vue').default,
        slider_rw: () => require('./widgets/version1.0/slider/slider_rw.vue').default,
        switch_r: () => require('./widgets/version1.0/switch/switch_rw.vue').default,
        switch_rw: () => require('./widgets/version1.0/switch/switch_rw.vue').default,
        temp_slider_r: () => require('./widgets/version1.0/temp_slider/temp_slider_r.vue').default,
        temp_slider_rw: () =>
            require('./widgets/version1.0/temp_slider/temp_slider_rw.vue').default,
    },
};
export const TemplateDicts: Record<TemplateId, () => any> = {
    default: () => require('./template/default/default.vue').default,
    light: () => require('./template/light/default.vue').default,
    xy_color_temp_light: () => require('./template/xy_color_temp_light/default.vue').default,
    temp_light: () => require('./template/temp_light/default.vue').default,
    color_light: () => require('./template/color_light/default.vue').default,
    sense_mode: () => require('./template/sense_mode/default.vue').default,
};

export type TemplateId =
    | 'light'
    | 'xy_color_temp_light'
    | 'temp_light'
    | 'color_light'
    | 'sense_mode'
    | 'default';

export type WidgetId =
    | 'input_r'
    | 'input_rw'
    | 'number_r'
    | 'number_rw'
    | 'picker_r'
    | 'picker_rw'
    | 'slider_r'
    | 'slider_rw'
    | 'switch_r'
    | 'switch_rw'
    | 'temp_slider_r'
    | 'temp_slider_rw';

export type AbandonedWidgetId =
    | 'static-color'
    | 'static-temp'
    | 'static-light'
    | 'dynamic-color'
    | 'dynamic-light'
    | 'dynamic-temp'
    | 'xy-color-temp-light'
    | 'color-temp-light'
    | 'color'
    | 'light';
