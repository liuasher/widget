<!--
 * @Date: 2020-07-28 12:09:55
 * @LastEditors: 刘亚雄
-->
<template>
    <div class="iiap-template template-default">
        light
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
