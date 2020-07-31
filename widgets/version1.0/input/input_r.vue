<template>
    <div>
        <div class="label"></div>
        <el-input
            v-model="value"
            :disabed="disabed"
            size="small"
            class="input"
            @change="handleChange()"
            placeholder="请输入"
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
            value: '',
            disabed: true,
        };
    },
    methods: {
        handleChange() {
            this.$emit('change', { dataKey: this.dataKey, value: this.value });
        },
    },
});
</script>

<style lang="less" scoped></style>
