<template>

  <BlogCard v-for="item in testObj" :key="item.id" :blog="item" class="mb-5" />



  <!-- 输入框 -->
  <div class="lg:flex  w-full gap-20">
    <div class="lg:flex-1">
      <textarea class="textarea textarea-sm lg:textarea-lg w-full h-40" placeholder="Bio" v-model="text"></textarea>

    </div>

    <div v-html="content" class="prose lg:flex-1  max-w-none"></div>


  </div>
  <button class="btn block mx-auto w-3/4" @click="onSubmit">发布</button>



</template>

<script setup>
import BlogCard from '../../components/BlogCard.vue'
import { useUserStore } from '../../store/user'
import { storeToRefs } from 'pinia'
import markdownit from 'markdown-it'
import { onMounted, reactive, ref } from 'vue'
import { computed } from 'vue'
const userStore = useUserStore();
const { user, blogs } = storeToRefs(userStore);
console.log(user);
const md = markdownit()
const text = ref('')
const content = computed(() => {
  return md.render(text.value)
})
const onSubmit = async () => {

}

// onMounted(async () => {
//   await userStore.fetchUserAndBlogs()
//   console.log(blogs);
// })

const testObj = reactive([
  {
    id: '1',
    title: '如何优雅地早起',
    content: `# 如何优雅地早起

很多人想养成早起的习惯，但总是失败。这里有几个小技巧：

1. 提前准备第二天的任务
2. 睡前避免使用电子设备
3. 起床后不要赖床，立刻洗脸

> “自律是自由的前提。”`,
    created_at: '2025-07-28T08:00:00Z',
    user_id: 'user123'
  },
  {
    id: '2',
    title: '为什么我开始写博客了',
    content: `# 为什么我开始写博客了

写博客不仅是记录生活，更是整理思维的好方式。

- 它能帮助我输出想法
- 也方便我回顾成长过程

希望你也可以尝试。`,
    created_at: '2025-07-26T11:42:00Z',
    user_id: 'user123'
  },
  {
    id: '3',
    title: 'Vue3 + Pinia 初体验',
    content: `# Vue3 + Pinia 初体验

最近我用 Vue3 和 Pinia 写了一个小项目，感觉非常轻量。

\`\`\`js
const store = defineStore('main', {
  state: () => ({ count: 0 })
})
\`\`\`

响应式体验真的很棒！`,
    created_at: '2025-07-25T15:00:00Z',
    user_id: 'user123'
  },
  {
    id: '4',
    title: '记一次失败的旅行',
    content: `# 记一次失败的旅行

原计划去云南自驾，结果遇上大雨、堵车、酒店还订错了…

不过也正是这样，才让我学会了如何从混乱中找到乐趣。

🧳 下次会更好。`,
    created_at: '2025-07-20T10:12:00Z',
    user_id: 'user123'
  },
  {
    id: '5',
    title: '最近读的一本好书：《原则》',
    content: `# 最近读的一本好书：《原则》

瑞·达利欧的《原则》让我印象很深。他强调：

> “痛苦 + 反思 = 成长”

书中讲了如何建立个人原则，面对冲突、做决策都更理性。推荐阅读！`,
    created_at: '2025-07-15T13:33:00Z',
    user_id: 'user123'
  }
]
)
</script>

<style scoped></style>