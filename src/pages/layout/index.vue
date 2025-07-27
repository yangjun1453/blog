<template>
  <div class="h-full flex flex-col  md:w-3/4 md:mx-auto  lg:w-3/4  lg:mx-auto">
    <Header></Header>

    <div class="h-full w-full">



      <div class="lg:flex-1  md:pr-5   text-4xl rounded-4xl overflow-hidden  p-2 h-full relative  ">

        <RouterView></RouterView>

        <div class="absolute md:left-10 left-7 md:bottom-20  bottom-30">

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
