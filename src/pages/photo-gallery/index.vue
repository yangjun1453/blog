<template>
  <div>
    <h1>
      实用app
    </h1>


  </div>
  <div>


    <div class="card w-96 bg-base-100 shadow-sm">
      <div class="card-body">
        <!-- <span class="badge badge-xs badge-warning">Most Popular</span> -->
        <div class="flex justify-between">
          <h2 class="text-3xl font-bold">Premium</h2>
          <span class="text-xl">free</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, repudiandae consequatur, magnam illum
          amet aspernatur molestias voluptatum sit eius ipsam recusandae dicta? Ut itaque optio fugiat delectus
          corporis, nulla ratione.</p>

        <div class="mt-6">
          <button class="btn btn-primary btn-block">前往官网</button>
        </div>
      </div>
    </div>
    <div class="card w-96 bg-base-100 shadow-sm">
      <div class="card-body">
        <!-- <span class="badge badge-xs badge-warning">Most Popular</span> -->
        <div class="flex justify-between">
          <h2 class="text-3xl font-bold">Premium</h2>
          <span class="text-xl">free</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, repudiandae consequatur, magnam illum
          amet aspernatur molestias voluptatum sit eius ipsam recusandae dicta? Ut itaque optio fugiat delectus
          corporis, nulla ratione.</p>

        <div class="mt-6">
          <button class="btn btn-primary btn-block">前往官网</button>
        </div>
      </div>
    </div>
  </div>


















</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAvatarDataUri } from '../../api'

const avatarUri = ref('')

onMounted(async () => {
  avatarUri.value = await getAvatarDataUri('user12323') // seed 可自定义
})

const arr = ref([
  { name: 'MarkText', description: 'Description for App 1', link: '#' },
  { name: 'SumatraPDF', description: 'Description for App 2', link: '#' },
  { name: 'Watt Toolkit', description: 'Description for App 3', link: '#' },
  { name: 'Typora', description: 'Description for App 4', link: '#' },
  { name: 'Obsidian', description: 'Description for App 5', link: '#' },
  { name: 'VSCode', description: 'Description for App 6', link: '#' },
  { name: 'Notion', description: 'Description for App 7', link: '#' },

  // 添加更多应用 
])
</script>

<style scoped></style>