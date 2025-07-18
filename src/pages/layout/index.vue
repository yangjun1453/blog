<template>
  <div class="h-full flex flex-col">
    <Header></Header>

    <div class="flex flex-1">
      <div class="fixed left-10 bottom-20 hidden md:block">
        <SideBar />
      </div>

      <div class="md:flex-1 md:pl-10 md:pr-5 md:py-10 md:ml-25 mx-auto">
        <div
          class="text-4xl w-full h-full shadow-2xl rounded-4xl overflow-hidden bg-[#FF8058]/60 border-2 border-black p-2">
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
