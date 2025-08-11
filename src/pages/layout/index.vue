<template>
  <div class=" h-full flex flex-col  ">
    <Header class="sticky top-0 z-50 " />








    <div class=" w-full flex-1 overflow-auto lg:flex flex flex-col">



      <div
        class=" md:pr-5  md:w-3/4 md:mx-auto  lg:w-1/2  lg:mx-auto  rounded-4xl   p-2  relative flex flex-col flex-1 pb-20  ">
        <div class=" absolute top-3 right-2 md:hidden" @click="toggleSidebar">
          <component :is="isOpen ? PhX : PhList" :size="40" weight="thin" />
        </div>
        <div v-if="isOpen" class=" text-3xl flex flex-col gap-10 text-center  mt-30 md:hidden items-center">

          <p class="  px-12 py-3 inline-block  hover:bg-[#3F51B5]  hover:text-white">Home</p>
          <p class="  px-12 py-3 inline-block  hover:bg-[#3F51B5]  hover:text-white">About</p>
          <p class="  px-12 py-3 inline-block  hover:bg-[#3F51B5]  hover:text-white">Blog</p>
        </div>
        <RouterView v-else></RouterView>
        <div v-if="!isOpen" class="text-center">
          <div class="divider mt-20 bg"></div>
          <p class="mx-auto mt-10 text-[13px]">© 2025 Jun’s Blog. All rights reserved.</p>
        </div>

      </div>

    </div>


  </div>
</template>

<script setup>
import Header from "../../components/Header.vue";
import SideBar from "../../components/SideBar.vue";
import { ref } from "vue";
import { PhList, PhX } from '@phosphor-icons/vue';
const isOpen = ref(false)
const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
}
</script>

<style scoped></style>
