<template>
  <div>
    <img :src="avatarUri" alt="Avatar" class=" rounded-full " />
  </div>
  <h2>YC 你看尼玛呢</h2>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getAvatarDataUri } from '../../api'

const avatarUri = ref('')

onMounted(async () => {
  avatarUri.value = await getAvatarDataUri('user12323') // seed 可自定义
})
</script>

<style scoped></style>