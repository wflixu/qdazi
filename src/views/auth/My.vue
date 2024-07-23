<template>
    <div>
        <div>
            {{ userInfo }}
        </div>
        <van-button block type="primary" @click="onLogout">
            logout
        </van-button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { computed } from 'vue'
import { useSystemStore, } from '@/stores/system';


const systemStore = useSystemStore()
const router = useRouter();

const userInfo = computed(() => {
    return systemStore.user
});

const onLogout = () => {
    systemStore.setToken('')
    systemStore.setUser({})
    router.replace('/login')
}

</script>

<style scoped></style>