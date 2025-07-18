<script setup>
import {
  PhYoutubeLogo,
  PhWechatLogo,
  PhX,
  PhInstagramLogo,
} from "@phosphor-icons/vue";
</script>
<template>
  <div class="flex flex-col gap-5">
    <PhInstagramLogo :size="30" color="#343a40" weight="fill" />
    <PhX :size="30" weight="fill" color="#343a40" />
    <PhWechatLogo :size="30" color="#343a40" weight="fill" />
    <PhYoutubeLogo :size="30" color="#343a40" weight="fill" />
  </div>
</template>

<style scoped></style>
