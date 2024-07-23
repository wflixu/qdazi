<template>
  <div>
    <h1>demo</h1>
   <SafeArea/>
  </div>
</template>

<script setup>
import Custome from "./components/Custome.vue";
import PasswordInput from './components/password-input.vue'
import inputKeyboard from "./components/input-keyboard.vue";
import SafeArea from './components/safe-area.vue'

import { ref,computed } from "vue";
import InputNumber from "./components/input-number.vue";
const showPopup = ref(false);




const onStart = () => {
  console.log("test");
  showPopup.value = true;
};

const width = ref(200)
</script>

<style scoped>
 .bg {
  width: 200px;
  height: 100px;
  border:4px solid #690;
  background: url(./../assets/bg.png) no-repeat;
  background-size: 100% auto;
 }
 .bg-gradient {
    width: 300px; height: 100px;
    background: linear-gradient(deepskyblue, deeppink);
}
</style>
