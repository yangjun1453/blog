<template>
  <div class="h-full flex flex-col ">
    <Header ></Header>

    <div class="h-full">



      <div class="lg:flex-1  md:pr-5  md:ml-50  text-4xl lg:ml-20 rounded-4xl overflow-hidden  p-2 h-full">

        <RouterView></RouterView>

      </div>
    </div>
    <Footer class="hidden md:block"></Footer>
    <NavBar class=" fixed bottom-0 md:hidden  block" />
    <div class="fixed md:left-10 left-7 md:bottom-20  bottom-25">

      <SideBar />
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
