<template>
  <div>
    <van-popup v-model:show="show" :style="{ padding: '64px' }" position="bottom">
        <h1>{{ rect }}</h1>
    <van-field v-model="txt" type="number"></van-field>
    <input type="number" @input="handleInput" v-model="txt" inputmode="numeric"/>
    <h1>{{ txt }}</h1>

    </van-popup>
   
  </div>
</template>

<script setup>
import { onMounted, reactive , ref} from "vue";
const rect = reactive({ height: 0, width: 0 });
const txt = ref("");
const show = ref(true)
let observer;
const handleInput = (event) => {
    getBodyRect()
};
const start = () => {
  // Select the node that will be observed for mutations
  const targetNode = document.body;

  // Options for the observer (which mutations to observe)
  const config = { attributes: true, childList: false, subtree: false };

  // Callback function to execute when mutations are observed
  const callback = (mutationList, observer) => {
    console.warn("----callback", mutationList);
    for (const mutation of mutationList) {
      if (mutation.type === "childList") {
        console.log("A child node has been added or removed.");
      } else if (mutation.type === "attributes") {
        console.log(`The ${mutation.attributeName} attribute was modified.`);
      }
    }
  };

  // Create an observer instance linked to the callback function
  observer = new MutationObserver(callback);

  // Start observing the target node for configured mutations
  observer.observe(targetNode, config);
};

const getBodyRect = () => {
  const crect = document.body.getBoundingClientRect();
  console.warn(crect);
  rect.height = crect.height;
  rect.width = crect.width;
};
onMounted(() => {
    getBodyRect()
  start();
  return () => {
    if (observer) {
      // Later, you can stop observing
      observer.disconnect();
    }
  };
});
</script>

<style lang="postcss" scoped></style>
