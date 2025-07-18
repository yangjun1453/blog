<template>
  <div class="h-full flex flex-col">
    <Header></Header>

    <div class="flex flex-1">
      <div class="fixed left-10 bottom-20 hidden md:block"><SideBar /></div>

      <div class="flex-1 pl-10 pr-5 py-10 ml-25">
        <div
          class="text-4xl w-full h-full shadow-2xl rounded-4xl overflow-hidden bg-[#FF8058]/60 border-2 border-black p-2"
        >
          <RouterView></RouterView>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script setup>
import Header from "../../components/Header.vue";
import SideBar from "../../components/SideBar.vue";
import Footer from "../../components/Footer.vue";
</script>

<style scoped></style>
