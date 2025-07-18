<script setup>
import { onMounted, ref } from "vue";
import {
  SignUp,
  RetrieveUser,
  SignOut,
  SignIn,
 
  QueryMyBlogs,
} from "../api/index.ts";

const my_modal_3 = ref(null);
const my_modal_4 = ref(null);

const handleRegisterClick = () => {
  my_modal_4.value?.showModal();
};
const handleLoginClick = () => {
  my_modal_3.value?.showModal();
};

const form = ref({
  email: "",
  password: "",
});
const email = ref("");
const password = ref("");

const myBlogs = ref([]); // 保存查询到的博客
const userdata = ref(null);


// 查询用户和博客
const fetchUserAndBlogs = async () => {
  const { user } = await RetrieveUser();
  userdata.value = user || null;

  if (user) {
    myBlogs.value = await QueryMyBlogs(user.id);
  } else {
    myBlogs.value = [];
  }
};

onMounted(() => {
  fetchUserAndBlogs();
});

const onRegister = async (e) => {
  e.preventDefault();
  try {
    await SignUp(form.value.email, form.value.password);
    alert("注册成功，请登录");
    my_modal_4.value?.close();
  } catch (err) {
    alert(err.message);
  }
};

const onLogin = async (e) => {
  e.preventDefault();
  try {
    await SignIn(email.value, password.value);
    alert("登录成功");
    my_modal_3.value?.close();
    await fetchUserAndBlogs();
  } catch (err) {
    alert(err.message);
  }
};

const out = async () => {
  try {
    await SignOut();
    userdata.value = null;
    myBlogs.value = [];
  } catch (err) {
    alert(err.message);
  }
};



</script>

<template>

  <!-- 导航栏 -->
  <div class="grid md:grid-cols-4 grid-cols-5 p-7 text-sm md:text-xl font-bold text-shadow-lg">
    <div class="md:col-span-1 text-2xl hidden md:block">June</div>
    <div class="col-span-3 md:col-span-2">
      <ul class="flex text-center">
        <li class="flex-1">
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li class="flex-1">
          <RouterLink to="/vlog">Vlog</RouterLink>
        </li>
        <li class="flex-1">
          <RouterLink to="/blogs">Blogs</RouterLink>
        </li>
        <li class="flex-1">
          <RouterLink to="/photogallery">Photo Gallery</RouterLink>
        </li>
      </ul>
    </div>


   <div class="md:col-span-1 flex justify-end col-span-2 items-center gap-4">
  <!-- 如果已登录 -->
  <template v-if="userdata">
    <span class="text-sm  truncate max-w-[160px]">{{ userdata.email }}</span>
    <p class="cursor-pointer  hover:underline" @click="out">Logout</p>
  </template>

  <!-- 如果未登录 -->
  <template v-else>
    <p class="cursor-pointer" @click="handleLoginClick">Login</p>
    <p class="cursor-pointer" @click="handleRegisterClick">Register</p>
  </template>
</div>


  </div>

  <dialog id="my_modal_4" ref="my_modal_4" class="modal">

    <div class="modal-box">
      <form @submit="onRegister" method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" type="button"
          @click="my_modal_4.close()">
          ✕
        </button>

        <div class="flex flex-col items-center gap-2">
          <h1 class="text-3xl">Register</h1>

          <input type="email" class="input" placeholder="Email address" v-model="form.email" required />
          <input type="password" class="input" placeholder="Password" v-model="form.password" required />
          <button class="btn" type="submit">Sign Up</button>
        </div>
      </form>

    </div>



  </dialog>



  <dialog id="my_modal_3" ref="my_modal_3" class="modal">
    <div class="modal-box">
      <form @submit="onLogin" method="dialog">
        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" type="button"
          @click="my_modal_3.close()">
          ✕
        </button>

        <div class="flex flex-col items-center gap-2">
          <h1 class="text-3xl">Login</h1>
          <input type="email" class="input" placeholder="Email address" v-model="email" required />
          <input type="password" class="input" placeholder="Password" v-model="password" required />
          <button class="btn" type="submit">Sign In</button>
        </div>
      </form>
    </div>


  </dialog>
</template>

<style scoped></style>
