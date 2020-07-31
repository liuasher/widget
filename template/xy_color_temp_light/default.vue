<!--
 * @Date: 2020-07-29 10:30:05
 * @LastEditors: 刘亚雄
-->
<template>
    <el-card class="iiap-template temp_light">
        <div class="label">XY彩温灯控制</div>
        <Widget
            @change="handleWidgetChange"
            v-for="item in element"
            :widgetId="item.widgetId"
            :version="version"
            :deviceId="deviceId"
            :model="model"
            :state="state"
            :resource="item"
        />
    </el-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { TemplateProps, TemplatePropsData } from '../../type';
import Widget from '../../widgets';

export default Vue.extend<TemplateProps>({
    name: 'TempLight',
    props: TemplatePropsData,
    components: { Widget },
    data() {
        return {};
    },
    mounted() {},
    computed: {
        element() {
            // 此处默许我们知道里面的结构
            const { uiElement } = this.uiElement;
            return uiElement[0].uiElement;
        },
    },
    methods: {
        handleWidgetChange(config) {
            console.log(config);
        },
    },
});
</script>

<style lang="less" scoped>
.label {
    border-bottom: solid 1px #ebeef5;
    margin-bottom: 10px;
}
.temp_light {
    width: 25vw;
}
</style>
