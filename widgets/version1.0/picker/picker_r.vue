<!--
 * @Date: 2020-07-29 15:28:01
 * @LastEditors: 刘亚雄
-->
<template>
    <div>
        <div class="label"></div>
        <el-select
            class="input"
            size="small"
            v-model="value"
            :disabled="disabed"
            @change="handleChange('pValue')"
            placeholder="请选择"
        >
            <el-option
                v-for="item in valueList"
                :key="item.value"
                :label="item.name"
                :value="item.value"
            ></el-option>
        </el-select>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'InputR',
    props: {},
    data() {
        return { value: '', disabed: true };
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
