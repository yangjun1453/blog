<template>
    <div class=" bg-[#FF9776] w-full h-[77px] rounded-t-3xl flex justify-between items-center px-[33px] text-sm ">
        <div class="flex flex-col  items-center gap-2 flex-1 h-full justify-center  rounded-2xl hover:bg-[#FF9F81]  hover:translate-y-[-30px]  transition-transform duration-300 ease-out "
            @click="navigateTo('/about')">
            <img v-if="user" :src="user.user_metadata.avatar" alt="" class=" w-[28px] h-[28px] ">
            <PhUser v-else :size="28" weight="fill" color="#343a40" />
            <p>Me!</p>
        </div>
        <div class="flex flex-col  items-center gap-2 flex-1 h-full justify-center  rounded-2xl hover:bg-[#FF9F81]  hover:translate-y-[-15px]  transition-transform duration-300 ease-out "
            @click="navigateTo('/vlogs')">
            <PhYoutubeLogo :size="28" weight="fill" color="#343a40" />
            <p>Vlogs</p>
        </div>
        <div class="flex flex-col  items-center gap-2 flex-1 h-full justify-center  rounded-2xl hover:bg-[#FF9F81]  hover:translate-y-[-15px]  transition-transform duration-300 ease-out "
            @click="navigateTo('/blogs')">


            <PhArticle :size="28" weight="fill" color="#343a40" />
            <p>Blogs</p>
        </div>
        <div class="flex flex-col  items-center gap-2 flex-1 h-full justify-center  rounded-2xl hover:bg-[#FF9F81]  hover:translate-y-[-15px]  transition-transform duration-300 ease-out "
            @click="navigateTo('/photogallery')">
            <PhImage :size="28" weight="fill" color="#343a40" />
            <p>Photos</p>

        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '../store/user';
import { storeToRefs } from "pinia";
import { PhYoutubeLogo, PhArticle, PhImage, PhUser } from '@phosphor-icons/vue';
import { useRouter } from "vue-router";
const router = useRouter()
const navigateTo = (path) => {
    router.push({
        path: `${path}`
    })



}
const userStore = useUserStore();
const { user } = storeToRefs(userStore);
console.log(user);
</script>

<style scoped></style>
