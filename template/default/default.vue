<template>
    <div class="iiap-template template-default">
        <div>1111111</div>
        <div>
            <Widget
                widgetId="SliderR"
                :uiElement="uiElement"
                :version="version"
                :deviceId="deviceId"
                :model="model"
                :state="state"
            />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { TemplateProps, TemplatePropsObject } from '../../type';

import Widget from '../../widgets';

export default Vue.extend<TemplateProps>({
    name: 'DefaultTemp',
    props: TemplatePropsObject,
    components: { Widget },
    data() {
        return {};
    },
    mounted() {},
    computed: {
        element() {
            return this.uiElement[0];
        },
    },
    methods: {},
});
</script>

<style lang="less" scoped></style>
