<!--
 * @Date: 2020-07-29 15:28:01
 * @LastEditors: 刘亚雄
-->
<template>
    <div>
        <div class="label"></div>
        <el-slider
            class="input"
            :disabled="disabled"
            size="small"
            v-model="value"
            :min="minValue"
            :max="maxValue"
            :step="resolution"
            @change="handleChange('sValue')"
        ></el-slider>
    </div>
</template>

<script lang="ts">
import Vue, { PropsDefinition } from 'vue';
import { SliderPropsData, SliderProps } from './interface';

export default Vue.extend<SliderProps>({
    name: 'InputR',
    props: SliderPropsData,
    data() {
        return {
            value: 0,
            disabed: true,
        };
    },
    mounted() {},
    computed: {},
    methods: {
        handleChange() {
            this.$emit('change', { dataKey: this.dataKey, value: this.value });
        },
    },
});
</script>

<style lang="less" scoped></style>
