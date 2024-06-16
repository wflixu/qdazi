<template>
  <div>
    <h1>demo</h1>
    <van-button @click="onStart"> start {{ showPopup }} </van-button>
    <Custome v-model:open="showPopup"></Custome>
    <van-field
      v-model="account"
      placeholder="请输入用户名"
      type="number"
      :maxlength="6"
     
    />
    <div>account: {{ account }}</div>
  </div>
</template>

<script setup>
import Custome from "./components/Custome.vue";
import { ref } from "vue";
const showPopup = ref(false);
const account = ref("");

const accountFormatter = (str) => {
  console.log(str, typeof str);
  let chunks = str.match(/.{1,4}/g);

  // 如果最后一个元素长度小于4，则不需要添加"-"
  if (chunks[chunks.length - 1].length < 4) {
    // 移除最后一个"-"（如果有的话）
    chunks[chunks.length - 2] = chunks[chunks.length - 2].slice(0, -1);
  }

  // 使用join方法将数组元素用"-"连接起来
  return chunks.join("-");
};

const onStart = () => {
  console.log("test");
  showPopup.value = true;
};
</script>

<style scoped></style>
