<template>
  <div
    class="w-[270px] mx-auto md:mt-[228px] mt-[120px] flex flex-col justify-between items-center gap-10"
  >
    <div class="avatar mx-auto">
      <div class="w-24 rounded-full">
        <img src="/生成程序员博客头像.png" />
      </div>
    </div>
    <p class="text-[26px]">Yang Jun</p>
    <p class="font-light">Front-End Developer</p>
    <SideBar />
  </div>
</template>

<script setup>
import { ref } from "vue";
import SideBar from "../../components/SideBar.vue";
import { PhList, PhX } from "@phosphor-icons/vue";
const isOpen = ref(false);
const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped></style>
