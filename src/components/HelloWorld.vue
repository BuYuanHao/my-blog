<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1>今朝有酒今朝醉</h1>

  <div class="card">
    <button type="button" @click="count++">浦锐今天吃 {{ count }}个狗鸡</button>
    <p>
      请点击帮帮小浦QAQ
    </p>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
