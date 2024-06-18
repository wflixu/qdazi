<template>
  <div>
    <h1>demo</h1>
    <van-button @click="onStart"> start {{ showPopup }} </van-button>
    <Custome v-model:open="showPopup"></Custome>
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
    <div>
      max: {{ maxLength }}
    </div>
  </div>
</template>

<script setup>
import Custome from "./components/Custome.vue";
import { ref,computed } from "vue";
const showPopup = ref(false);
const account = ref("");
const max = 5;
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



const onStart = () => {
  console.log("test");
  showPopup.value = true;
};
</script>

<style scoped></style>
