<template>

  <div class="lg:flex  w-full gap-20">
    <div class="lg:flex-1">
      <textarea class="textarea textarea-sm lg:textarea-lg w-full h-40" placeholder="Bio" v-model="text"></textarea>

    </div>

    <div v-html="content" class="prose lg:flex-1  max-w-none"></div>


  </div>
  <button class="btn block mx-auto w-3/4">发布</button>



</template>

<script setup>

import markdownit from 'markdown-it'
import { ref } from 'vue'
import { computed } from 'vue'
const md = markdownit()
const text = ref('')
const content = computed(() => {
  return md.render(text.value)
})

</script>

<style scoped></style>