<template>
  <div class="flex gap-7  ">
    <PhInstagramLogo :size="30" color="#1A1A1A" weight="fill"
      class="hover:scale-110 hover:-translate-y-1 transition-transform duration-300" />
    <PhX :size="30" weight="fill" color="#1A1A1A"
      class="hover:scale-110 hover:-translate-y-1 transition-transform duration-300" />
    <PhWechatLogo :size="30" color="#1A1A1A" weight="fill"
      class="hover:scale-110 hover:-translate-y-1 transition-transform duration-300" />
    <PhYoutubeLogo :size="30" color="#1A1A1A" weight="fill"
      class="hover:scale-110 hover:-translate-y-1 transition-transform duration-300" />
  </div>
</template>
<script setup>
import {
  PhYoutubeLogo,
  PhWechatLogo,
  PhX,
  PhInstagramLogo,
} from "@phosphor-icons/vue";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
const route = useRoute();
import { computed } from "vue";
const isAboutPage = computed(() => {
  return route.path === "/about";
});
</script>
<style scoped></style>
