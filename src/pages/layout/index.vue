<template>
  <div class=" h-full flex flex-col  ">
    <Header class="sticky top-0 z-50 " />

    <div class=" w-full flex-1 overflow-auto lg:flex flex flex-col">



      <div
        class=" md:pr-5  md:w-3/4 md:mx-auto  lg:w-1/2  lg:mx-auto  rounded-4xl   p-2  relative flex flex-col flex-1 pb-20  ">

        <RouterView></RouterView>

        <div class="divider mt-20 bg"></div>
        <p class="mx-auto mt-10 text-[13px]">© 2025 Jun’s Blog. All rights reserved.</p>
      </div>

    </div>


  </div>
</template>

<script setup>
import Header from "../../components/Header.vue";
import SideBar from "../../components/SideBar.vue";


</script>

<style scoped></style>
