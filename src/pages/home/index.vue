<template>
    <div class=" w-[270px] mx-auto md:mt-[228px] mt-[120px] flex flex-col justify-between items-center gap-10">

        <div class="avatar mx-auto">
            <div class="w-24 rounded-full">
                <img src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp" />
            </div>
        </div>
        <p class=" text-[26px]">Lorem ipsum dolor</p>
        <p class=" font-light">Lorem ipsum dolor</p>
        <SideBar />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import SideBar from '../../components/SideBar.vue';
import { PhList, PhX } from '@phosphor-icons/vue';
const isOpen = ref(false)
const toggleSidebar = () => {
    isOpen.value = !isOpen.value;
}
</script>

<style scoped></style>