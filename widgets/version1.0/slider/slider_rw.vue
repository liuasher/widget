<!--
 * @Date: 2020-07-29 15:28:01
 * @LastEditors: 刘亚雄
-->
<template>
    <div class="container">
        <span class="label">{{ resource.title.default }}</span>
        <el-slider
            class="input"
            size="small"
            v-model="value"
            :min="minValue"
            :max="maxValue"
            :step="resolution"
            @change="handleChange()"
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
        };
    },
    mounted() {
        console.log(9999, this.value);
    },
    computed: {
        minValue() {
            return Number(this.resource.minValue);
        },
        maxValue() {
            return Number(this.resource.maxValue);
        },
        resolution() {
            return Number(this.resource.resolution);
        },
    },
    methods: {
        handleChange() {
            this.$emit('change', { resource: this.resource.dataKey, value: this.value });
        },
    },
});
</script>

<style lang="less" scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    .label {
        margin-right: 20px;
    }
    .input {
        width: 0;
        flex-grow: 1;
    }
}
</style>
