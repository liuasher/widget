<!--
 * @Date: 2020-07-30 19:12:02
 * @LastEditors: 刘亚雄
-->
<template>
    <el-card class="iiap-template sense_mode">
        <div class="label">动态序列、情景模式设置</div>

        <el-tabs>
            <el-tab-pane v-for="mode in element" :label="mode.widgetId" name="first">
                {{ mode.widgetId }}
            </el-tab-pane>
        </el-tabs>
    </el-card>
</template>

<script lang="ts">
import Vue from 'vue';
import { TemplateProps, TemplatePropsData } from '../../type';

import Widget from '../../widgets';

export default Vue.extend<TemplateProps>({
    name: 'DefaultTemp',
    props: TemplatePropsData,
    components: { Widget },
    data() {
        return {};
    },
    mounted() {},
    computed: {
        element() {
            const { uiElement } = this.uiElement;
            return uiElement;
        },
    },
    methods: {},
});
</script>

<style lang="less" scoped>
.label {
    border-bottom: solid 1px #ebeef5;
    margin-bottom: 10px;
}
.sense_mode {
    width: 100vw;
}
</style>
