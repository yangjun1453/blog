<template>
  <!-- <div class="flex gap-5">
    <BlogCard :posts="posts" />
  </div> -->

  <div>

    <button class="btn bg-transparent border-none shadow-2xl " onclick="my_modal_5.showModal()">Написать блог</button>
    <dialog id="my_modal_5" class="modal">
      <div class="modal-box">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <!-- 内容 -->
        <div class="text-xl flex flex-col  items-center  w-full ">
          <div class="mb-4 w-full text-center">
            <label for="">Blog Title</label><br />
            <input type="text" placeholder="title" class="input" v-model="newBlog.title" />
          </div>

          <div class="w-full text-center">
            <label for="">Blog Content</label><br />
            <textarea class="textarea" placeholder="Bio" v-model="newBlog.content"></textarea>
          </div>
          <button class="btn " @click="OnPost"> Submit</button>
        </div>


      </div>
    </dialog>


    <ul class="list  rounded-box shadow-md bg-transparent text-black ">

      <li class="p-4 pb-2 text-xs  tracking-wide">Most played songs this week</li>

      <li class="list-row" v-for="blog in blogs" :key="blog.id">
        <div><img class="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
        <div>
          <div>{{ blog.title }}</div>
          <div class="text-xs uppercase font-semibold ">{{ blog.content }}</div>
        </div>
        <button class="btn btn-square btn-ghost">
          <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor">
              <path d="M6 3L20 12 6 21 6 3z"></path>
            </g>
          </svg>
        </button>
        <button class="btn btn-square btn-ghost">
          <svg class="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none" stroke="currentColor">
              <path
                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z">
              </path>
            </g>
          </svg>
        </button>
      </li>



    </ul>

  </div>

</template>

<script setup>

import { onMounted, reactive, ref } from 'vue';
import { RetrieveUser, AddBlog, QueryMyBlogs } from '../../api/index.ts'
const currentUserData = ref(null)
const blogs = ref([])
onMounted(async () => {
  const data = await RetrieveUser()
  currentUserData.value = data
  getBlog()



})
const getBlog = async () => {
  const blogData = await QueryMyBlogs(currentUserData.value.user.id)

  blogs.value = blogData


}

const newBlog = ref({
  title: '',
  content: ''
})

const OnPost = async () => {
  if (!currentUserData.value) {
    alert("请先登录");
    return;
  }

  const { title, content } = newBlog.value;
  if (!title.trim() || !content.trim()) {
    alert("标题或内容不能为空");
    return;
  }

  try {
    await AddBlog(currentUserData.value.user.id, title, content);
    alert("发布成功！");
    getBlog()
    newBlog.value.title = '';
    newBlog.value.content = '';
    document.getElementById("my_modal_5")?.close(); // 关闭弹窗

  } catch (err) {
    alert("发布失败: " + err.message);
  }
}


</script>

<style scoped></style>
