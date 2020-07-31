<template>
    <div style="display:flex">
        <div class="label">{{ title.default }}</div>
        <el-switch
            v-model="value"
            :disabled="disabled"
            :active-value="0"
            :inactive-value="1"
            size="small"
            @change="handleChange()"
        />
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { SwitchPropsData, SwitchProps } from './interface';
export default Vue.extend<SwitchProps>({
    name: 'InputR',
    props: SwitchPropsData,
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
