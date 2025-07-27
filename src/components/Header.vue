<script setup>

import { useUserStore } from "../store/user.js";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
const userStore = useUserStore();
const { user, blogs, email, password, isLoginDialogVisible, isRegisterDialogVisible } = storeToRefs(userStore);
const loading = ref(false);
const loginSuccess = ref(false);
const loginError = ref("");

const my_modal_4 = ref(null);
const my_modal_3 = ref(null);
const onRegister = async (e) => {
  e.preventDefault();
  try {
    await userStore.register();
    my_modal_4.value?.close();
  } catch (err) {
    alert(err.message);
  }
};

// 登录
const onLogin = async (e) => {
  e.preventDefault();
  loading.value = true;
  loginError.value = "";
  loginSuccess.value = false;
  try {
    await userStore.login();
    loginSuccess.value = true;
    my_modal_3.value?.close();

    email.value = '';
    password.value = '';

    setTimeout(() => {
      loginSuccess.value = false
    }, 2000)
  } catch (err) {
    console.log(err);
    loginError.value = ' 账号或密码不正确，请重试。'
    password.value = ''; // 清空密码
  } finally {
    loading.value = false
  }
};

// 退出
const out = async () => {
  await userStore.logout();
};

onMounted(() => {
  userStore.fetchUserAndBlogs();

});
</script>

<template>

  <!-- 登陆成功提示框 -->
  <div role="alert" class="alert alert-success w-1/2 mx-auto" v-if="loginSuccess">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <span>登录成功</span>
  </div>





  <!-- 导航栏 -->
  <div
    class="md:grid md:grid-cols-4 grid-cols-5 p-7 text-sm md:text-md lg:text-xl font-bold text-shadow-lg hidden  items-center   ">
    <div class="md:col-span-1 text-2xl hidden md:block  text-[#0d0d0d]">June</div>
    <div class="col-span-3 md:col-span-2 ">
      <ul class="flex text-center">
        <li class="flex-1 hover:underline underline-offset-4">
          <RouterLink class=" text-[#0d0d0d]" to="/about">About</RouterLink>
        </li>
        <li class="flex-1 hover:underline underline-offset-4">
          <RouterLink class=" text-[#0d0d0d]" to="/vlogs">Vlogs</RouterLink>
        </li>
        <li class="flex-1 hover:underline underline-offset-4">
          <RouterLink class=" text-[#0d0d0d]" to="/blogs">Blogs</RouterLink>
        </li>
        <li class="flex-1 hover:underline underline-offset-4">
          <RouterLink class=" text-[#0d0d0d]" to="/photogallery">Photo Gallery</RouterLink>
        </li>
      </ul>
    </div>


    <div class="md:col-span-1 flex justify-end col-span-2 items-center gap-4">
      <!-- 如果已登录 -->
      <template v-if="user">
        <span class="text-sm   text-[#0d0d0d] truncate max-w-[160px]">{{ user.email }}</span>
        <img :src=user.user_metadata.avatar alt="">
        <div class="cursor-pointer   rounded-2xl bg-[#faae2b] px-5 py-2 text-[#00473e] hover:bg-[#fcc419]" @click="out">
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
  </div>



  <!-- 注册 -->
  <dialog id="my_modal_4" ref="my_modal_4" class="modal">
    <div class="modal-box">
      <form @submit="onRegister" method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" type="button"
          @click="my_modal_4.close()">
          ✕
        </button>

        <div class="flex flex-col items-center gap-2">
          <h1 class="text-3xl">Register</h1>
          <input type="email" class="input" placeholder="Email address" v-model="email" required />
          <input type="password" class="input" placeholder="Password" v-model="password" required />



          <button class="btn" type="submit">Sign up</button>
        </div>
      </form>
    </div>
  </dialog>








  <!-- 登录 -->
  <dialog id="my_modal_3" ref="my_modal_3" class="modal">
    <div class="modal-box">
      <form @submit="onLogin" method="dialog">
        <!-- 失败提示框 -->
        <div role="alert" class="alert alert-error w-2/3 mx-auto " v-if="loginError">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none"
            viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{{ loginError }}</span>
        </div>

        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" type="button"
          @click="my_modal_3.close()">
          ✕
        </button>

        <div class="flex flex-col items-center gap-2">
          <h1 class="text-3xl">Login</h1>
          <input type="email" class="input" placeholder="Email address" v-model="email" required />
          <input type="password" class="input" placeholder="Password" v-model="password" required />


          <button class="btn" type="submit" :disabled="loading">
            <span v-if="loading" class="loading loading-spinner loading-xs"></span>


            <span v-else>Sign In</span>




          </button>
        </div>

      </form>
    </div>
  </dialog>
</template>

<style scoped></style>
