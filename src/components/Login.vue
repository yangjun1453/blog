<template>
    <div class="md:col-span-1 flex justify-end col-span-2 items-center gap-4 ">
        <!-- 如果已登录 -->
        <template v-if="user">
            <span class="text-sm   text-[#0d0d0d] truncate max-w-[160px]">{{ user.email }}</span>
            <img :src=user.user_metadata.avatar alt="">
            <div class="cursor-pointer   rounded-2xl bg-[#faae2b] px-5 py-2 text-[#00473e] hover:bg-[#fcc419]"
                @click="out">
                Logout</div>
        </template>

        <!-- 如果未登录 -->
        <template v-else>
            <div class="cursor-pointer  shadow-2xl  rounded-2xl bg-[#faae2b] px-5 py-2 text-[#00473e] hover:bg-[#fcc419] "
                @click="my_modal_3.showModal()">Login</div>
            <div class="cursor-pointer  rounded-2xl bg-[#faae2b] px-5 py-2 text-[#00473e] hover:bg-[#fcc419] "
                @click="my_modal_4.showModal()">Register</div>
        </template>
    </div>
</template>

<script setup>
</script>

<style scoped></style>