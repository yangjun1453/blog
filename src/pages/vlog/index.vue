<template>
  <textarea class="textarea" placeholder="Bio"  v-model="content"></textarea>

  
  <input type="text" placeholder="Type here" class="input" />

  <button @click="test">发布</button>
</template>

<script setup>
import { ref } from 'vue'
import {Addcs} from '../../api/index.ts'
const test =async ()=>{
  Addcs()
}
const content = ref('')


</script>

<style scoped></style>
