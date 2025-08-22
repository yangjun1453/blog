<template>
  <div class="mx-auto mt-[118px]">
    <h1 class="text-[26px] mx-auto text-center mb-[22px]">ABOUT</h1>

    <p class="mb-7 text-[#555555]">
      Hi there, I'm Jun Yang, a front-end developer specializing in JavaScript,
      Vue, and modern web technologies. I’m passionate about breaking down
      complex problems into clean, efficient code, and I enjoy exploring
      front-end performance optimization, user experience design, and emerging
      technologies.
    </p>

    <p class="text-[#555555]">
      I started this blog to document my learning journey, share project
      experiences, and summarize practical development tips. My goal is to help
      fellow front-end enthusiasts grow, and also to create a space for
      exchanging ideas and learning from each other.Outside of work, I enjoy
      photography, traveling, and reading, capturing life’s moments through both
      words and lenses. In my free time
    </p>
  </div>

  <div>
    <div class="mt-[25px]">
      Skills
      <ol class="list-disc pl-10 mt-[21px] space-y-2 text-[#555555]">
        <li>HTML-CSS-JavaScript</li>
        <li>Vue.js</li>
        <li>Pinia</li>
        <li>Vue Router</li>
        <li>Element Plus</li>
        <li>Tailwind CSS / DaisyUI</li>
        <li>Git / GitHub</li>
        <li>TypeScript</li>
        <li>ESLint / Prettier</li>
      </ol>
    </div>

    <div></div>
  </div>
  <div>
    <div class="mt-[25px]">
      Projects
      <ol class="list-disc pl-10 mt-[21px] space-y-2 text-[#555555]">
        <li>
          <a href="https://blog-jade-three-38.vercel.app/#/home">shop demo</a>
        </li>
      </ol>
    </div>

    <div></div>
  </div>
  <SideBar class="mx-auto mt-20" />
</template>

<script setup>
import SideBar from "../../components/SideBar.vue";
</script>

<style scoped></style>
