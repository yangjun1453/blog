<script setup>
import { onMounted, reactive, ref } from 'vue';
import {SignUp,RetrieveUser,SignOut,SignIn,Addcs,QueryMyBlogs} from '../api/index.ts'
const handleRegisterClick = () => {
  my_modal_3.showModal();
};
const handleLoginClick = () => {
  my_modal_4.showModal();
};

const onRegister = async()=>{
    SignUp(form.value.email,form.value.password)
}
const onLogin =async(email,password)=>{
  const data= await SignIn(email,password)
  console.log(data,'登录成功');
}
const email =ref('')
const password =ref('')

const form = ref({
  email:'',
  password:''

})

const myBlogs = ref([]) // 保存查询到的博客
const userdata = ref({})

onMounted(async () => {
  const { user } = await RetrieveUser();
  console.log(user);
  userdata.value = user;

  if (user) {
    const blogs = await QueryMyBlogs(user.id);
    myBlogs.value = blogs;
    
  }
});

const out = ()=>{
  SignOut()
}

const test =async (id,content,)=>{
 await Addcs(id,content)
 
}
const content = ref('')

</script>

<template>
  <div class="grid grid-cols-4 p-7 text-sm md:text-xl font-bold text-shadow-lg">
    <div class="col-span-1 text-2xl">June</div>
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

    <div class="col-span-1 flex justify-end">
      <p class="mr-10" @click="handleLoginClick">Login</p>
      <p class="" @click="handleRegisterClick">Register</p>
    </div>

    <p>{{userdata.email? userdata.email:'未登录' }}</p>
    <p>上次登录时间:{{userdata.last_sign_in_at?new Date(userdata.last_sign_in_at).toLocaleString("zh-CN", { hour12: false }):''}}</p>

    <button @click="out(userdata.id,content)">退出登录</button>


     <textarea class="textarea" placeholder="Bio"  v-model="content"></textarea>

  
  <input type="text" placeholder="Type here" class="input" />

  <button @click="test(userdata.id,content)">发布</button>
  </div>
<div class="mt-10">
  <h2 class="text-lg font-bold mb-2">我的博客</h2>
  <ul>
    <li v-for="(blog, index) in myBlogs" :key="blog.id" class="mb-4 border p-3 rounded">
      <p class="text-sm text-gray-500">发布时间: {{ new Date(blog.created_at).toLocaleString("zh-CN", { hour12: false }) }}</p>
      <p class="mt-1">{{ blog.content }}</p>
    </li>
  </ul>
</div>

  <div>
    <!-- You can open the modal using ID.showModal() method -->
    

    <dialog id="my_modal_4" class="modal">
      <div class="modal-box">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
      <div>
        <input type="email" class="input" placeholder="Type here"  v-model="form.email"  />
        <input type="password" class="input" placeholder="Type here"  v-model="form.password"/>
        <button class="btn" @click="onRegister">zhuce</button>
      </div>
      </div>
    </dialog>
    

      <dialog id="my_modal_3" class="modal">
      <div class="modal-box">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
      <div>
        <input type="email" class="input" placeholder="Type here"  v-model="email"  />
        <input type="password" class="input" placeholder="Type here"  v-model="password"/>
        <button class="btn" @click="onLogin(email,password)">登录</button>
      </div>
      </div>
    </dialog>
  </div>
  
</template>

<style scoped></style>
