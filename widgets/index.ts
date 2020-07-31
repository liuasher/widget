/*
 * @Date: 2020-07-23 12:19:53
 * @LastEditors: 刘亚雄
 * @desc：进入到了一个widget,开始渲染每一个resource资源值
 */
import Vue, { CreateElement } from 'vue';
import { RenderContext } from 'vue/types/options';
import { WidgetPropsData, WidgetProps, Resource } from '../type';
import { WidgetsDicts } from '../config';

interface Context extends RenderContext {
    props: WidgetProps;
    listeners: {
        change: Function;
    };
}

let timer: number | null = null;
export default Vue.extend<WidgetProps>({
    name: 'Widget',
    props: WidgetPropsData,
    functional: true,
    render(h: CreateElement, context: Context) {
        const { version, deviceId, model, state } = context.props;
        const { widgetId, resource } = context.props;
        console.log(8899, context.props);
        // 此处我们是默认知道WidgetsDicts结构
        const target = WidgetsDicts[version][widgetId];
        return h(target(), {
            class: ['iiap-template'],
            style: {
                height: '40px',
                lineHeight: '40px',
            },
            props: {
                resource,
                deviceId,
                model,
                state,
            },
            on: {
                change(config: any) {
                    if (context.listeners.change) {
                        if (timer !== null) clearTimeout(timer);
                        timer = setTimeout(() => {
                            context.listeners.change(config);
                            timer = null;
                        }, 600);
                    }
                },
            },
        });
    },
});
