<template>
    <div>
        <van-form @submit="onSubmit">
            <van-field v-model="digit" type="digit" label="整数" />
            <!-- 允许输入数字，调起带符号的纯数字键盘 -->
            <van-field v-model="number" type="number" label="数字" @keyup.13="handleFinish"/>
        </van-form>
        <!-- 允许输入正整数，调起纯数字键盘 -->

     <van-button block @click="onTest">
test 
     </van-button>
     <input type="text" inputmode="numeric" @keyup="handleFinish">
    </div>
</template>

<script setup>
import { showFailToast } from 'vant';
import { ref, computed } from 'vue'

const digit = ref(0)
const number = ref('')

const onSubmit = () => {
    showFailToast('submit')
}
const handleFinish = (event) =>{
    showFailToast(event.key)
}
const onTest = () => {
    showFailToast('test')
}
</script>

<style scoped></style>
