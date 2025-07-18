<template>
  <div class="flex gap-5">
    <BlogCard :posts="posts" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../../lib/supabaseClient.ts";
import BlogCard from "../../components/BlogCard.vue";
const posts = ref([]);
async function getPosts() {
  const { data } = await supabase.from("posts").select();
  posts.value = data;
}
onMounted(() => {
  getPosts();
});
console.log(posts);
</script>

<style scoped></style>
