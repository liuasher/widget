/*
 * @Date: 2020-07-22 17:25:10
 * @LastEditors: 刘亚雄
 */
import { Resource, WidgetPropsData } from '../../../type';

export interface SliderProps extends Resource {
    minValue: string;
    maxValue: string;
    resolution: string;
}
export const SliderPropsData = WidgetPropsData;
