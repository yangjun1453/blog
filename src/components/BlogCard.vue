<template>
  <div
    class="md:flex justify-between gap-[41px] px-3 mb-[30px] md:w-3/4 md:mx-auto"
  >
    <div class="md:max-w-[372px] mb-[10px]">
      {{ blog.content }}
    </div>
    <div class="text-[13px] text-[#555555]">
      {{
        new Date(blog.created_at).toLocaleString("zh-CN", {
          year: "numeric",
          month: "long",
          day: "2-digit",
          weekday: "short",
        })
      }}
    </div>
    <button class="btn btn-sm btn-error" @click="$emit('delete', blog.id)">
      删除
    </button>
  </div>
</template>

<script setup>
import markdownit from "markdown-it";
import { computed } from "vue";
const md = markdownit();
const props = defineProps(["blog"]);
const content = computed(() => {
  return md.render(props.blog.content);
});
</script>

<style scoped></style>
