

<template>
  <main>
    <router-view />
  </main>
  <van-tabbar route  @change="onChange">
      <van-tabbar-item name="home" to="/home/home" icon="home-o">home</van-tabbar-item>
      <van-tabbar-item name="search" icon="search">标签</van-tabbar-item>
      <van-tabbar-item name="frends" icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item to="/home/about"  name="setting" icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
</template>


<script setup>
import {ref} from 'vue'
const active = ref('home')
const onChange = (active) =>{
  console.log(active)
}
</script>

<style scoped>
main {
  background-color: darkgoldenrod;
  height: calc(100% - 50px);
}

</style>
