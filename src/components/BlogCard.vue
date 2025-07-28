<template>
  <div class="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50">
    <div class="flex items-center justify-between">
      <span class="text-sm text-gray-600">{{ blog.created_at }}</span>
      <a rel="noopener noreferrer" href="#"
        class="px-2 py-1 font-bold rounded bg-orange-600 text-gray-50">Javascript</a>
    </div>
    <div class="mt-3">
      <a rel="noopener noreferrer" href="#" class="text-2xl font-bold hover:underline">{{ blog.title }}</a>
      <div class="mt-2 prose " v-html="content"></div>
    </div>
    <div class="flex items-center justify-between mt-4">
      <a rel="noopener noreferrer" href="#" class="hover:underline text-orange-600">Read more</a>
      <div>
        <a rel="noopener noreferrer" href="#" class="flex items-center">
          <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar"
            class="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500">
          <span class="hover:underline text-gray-600">Leroy Jenkins</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import markdownit from 'markdown-it'
import { computed } from 'vue'
const md = markdownit()
const props = defineProps(['blog'])
const content = computed(() => {
  return md.render(props.blog.content)
})
</script>

<style scoped></style>