<template>
  <div>
    <van-field
      v-model="account"
      placeholder="请输入用户名"
      :clearable="true"
      type="digit"
      :maxlength="maxLength"
      :formatter="accountFormatter"
      @clear="onClear"
    />
    <div>account: {{ account }}</div>
    <div>max: {{ maxLength }}</div>
    <div class="bg" :style="{ width: width + 'px' }"></div>
    <div>
      <input type="number" v-model="width" />
    </div>
    <div class="bg-gradient"></div>
  </div>
</template>

<script setup>
const max = 5;
const account = ref("");
const maxLength = computed(() => {
   return max + Math.floor((max-1) /4)
});
const onClear = () => {
  console.log('----')
  // account.value = ''
}

const accountFormatter = (str) => {
  console.log('str:', str)
  console.log('value:', account.value);
  let input = str.replace(/\s/g, '');
    // 使用正则表达式匹配每4位数字，中间添加空格
    return input.replace(/\d{4}(?=\d)/g, '$& ');
  
};
</script>

<style lang="less" scoped></style>
