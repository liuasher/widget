/*
 * @Date: 2020-07-22 17:25:10
 * @LastEditors: 刘亚雄
 */
import { Resource, WidgetPropsData } from '../../../type';

interface Option {
    name: string;
    value: string;
}
export interface SwitchProps extends Resource {
    valueList: Option[];
}
export const SwitchPropsData = WidgetPropsData;
