<template>
  <van-popup :show="props.open" @update:show="changeShow" :style="{ padding: '64px' }">内容</van-popup>
</template>

<script setup>

const props = defineProps(['open'])
const emit = defineEmits("update:open")
const changeShow = (val) =>{
  emit('update:open',val)
}
</script>

<style scoped></style>
