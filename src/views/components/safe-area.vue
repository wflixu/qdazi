<template>
    <div>
        <div class="box" >
            这个是安全区域的高度
        </div>
    </div>
</template>

<script setup>
    
    
    
</script>

<style scoped lang="postcss">

.box {
  background-color: aquamarine;
  color: red;
  border: 1px solid #555;
  height: env(safe-area-inset-top, 100px);
}

</style>