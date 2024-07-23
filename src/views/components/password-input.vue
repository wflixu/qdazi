<template>
  <div>
    <h1> input</h1>
    <van-password-input
      :value="value"
      :focused="showKeyboard"
      @focus="showKeyboard = true"
    />
    <div>{{ value }}</div>
    <!-- 数字键盘 -->
    <van-number-keyboard
      v-model="value"
      :show="showKeyboard"
      @input="onInput"
  @delete="onDelete"
      @blur="showKeyboard = false"
    />
  </div>
</template>

<script setup>
import { ref} from 'vue'
const value = ref('123');
const showKeyboard = ref(true);</script>

<style  scoped></style>
