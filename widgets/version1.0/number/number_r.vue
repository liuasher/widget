<template>
    <div>
        <div class="label"></div>
        <el-input-number
            size="small"
            :disabled="disabled"
            class="input"
            step-strictly
            controls-position="right"
            v-model="value"
            :min="minValue"
            :max="maxValue"
            :step="resolution"
            @change="handleChange()"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'InputR',
    props: {},
    data() {
        return {
            value: 0,
            disabled: true,
        };
    },
    mounted() {},

    computed: {
        handleChange() {
            this.$emit('change', { dataKey: this.dataKey, value: this.value });
        },
    },
    methods: {},
});
</script>

<style lang="less" scoped></style>
