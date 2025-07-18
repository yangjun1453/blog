<template>
  <textarea class="textarea" placeholder="Bio" v-model="content"></textarea>


  <input type="text" placeholder="Type here" class="input" />

  <button @click="test">发布</button>
</template>

<script setup>
const test = async () => {
  if (!userdata.value) {
    alert("请先登录");
    return;
  }
  if (!content.value.trim()) {
    alert("内容不能为空");
    return;
  }
  try {
    await Addcs(userdata.value.id, content.value);
    content.value = "";
    myBlogs.value = await QueryMyBlogs(userdata.value.id); // 新增后刷新博客列表
  } catch (err) {
    alert(err.message);
  }
};
</script>

<style scoped></style>
