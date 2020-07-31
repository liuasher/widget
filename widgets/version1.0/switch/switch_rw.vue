<!--
 * @Date: 2020-07-29 15:28:01
 * @LastEditors: 刘亚雄
-->
<template>
    <div>
        <span class="label">{{ resource.title.default }}</span>
        <el-switch
            v-model="value"
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
        };
    },
    mounted() {
        console.log(999, this);
    },
    computed: {},
    methods: {
        handleChange() {
            this.$emit('change', { dataKey: this.dataKey, value: this.value });
        },
    },
});
</script>

<style lang="less" scoped>
.label {
    margin-right: 10px;
}
</style>
