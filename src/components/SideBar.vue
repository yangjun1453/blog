<template>
  <div class="flex flex-col gap-5">
    <PhInstagramLogo :size="30" color="#343a40" weight="fill"
      class="hover:scale-110 hover:-translate-y-1 transition-transform duration-300" />
    <PhX :size="30" weight="fill" color="#343a40"
      class="hover:scale-110 hover:-translate-y-1 transition-transform duration-300" />
    <PhWechatLogo :size="30" color="#343a40" weight="fill"
      class="hover:scale-110 hover:-translate-y-1 transition-transform duration-300" />
    <PhYoutubeLogo :size="30" color="#343a40" weight="fill"
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

</script>
<style scoped></style>
