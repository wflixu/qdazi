<template>
    <div>
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]" />
                <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]" />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                    提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { login } from './api';
import { useSystemStore } from '@/stores/system';
import { useRouter } from 'vue-router';

const systemStore = useSystemStore()

const router = useRouter()

const username = ref('test');
const password = ref('666');
const onSubmit = (values) => {
    console.log('submit', values);
    login(values).then(res => {
        console.log(res);
        if (res.code === 200) {
            systemStore.setToken(res.data.token)
            systemStore.setUser(res.data.user)
            router.replace('/')
        }
    })
};



</script>

<style scoped></style>