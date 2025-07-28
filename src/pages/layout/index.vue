<template>
  <div class=" h-full flex flex-col  ">
    <Header class="sticky top-0 z-50 bg-white shadow-md" />

    <div class=" w-full flex-1 overflow-auto lg:flex flex flex-col">



      <div
        class=" md:pr-5  md:w-3/4 md:mx-auto  lg:w-3/4  lg:mx-auto  rounded-4xl   p-2  relative flex flex-col flex-1   ">

        <RouterView class="flex-1"></RouterView>

        <div class="absolute md:left-10 left-7 md:bottom-20  bottom-30   ">

          <SideBar />
        </div>
        <Footer class="hidden md:block"></Footer>
      </div>
      <NavBar class=" fixed bottom-0 md:hidden  block" />
    </div>


  </div>
</template>

<script setup>
import Header from "../../components/Header.vue";
import SideBar from "../../components/SideBar.vue";
import Footer from "../../components/Footer.vue";
import NavBar from "../../components/NavBar.vue";
</script>

<style scoped></style>
