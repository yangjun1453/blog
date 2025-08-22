import { defineStore } from "pinia";
import {
  SignUp,
  RetrieveUser,
  SignIn,
  SignOut,
  QueryMyBlogs,
  AddBlog,
  QueryAllBlogs,
  DeleteBlog,
} from "../api/index";
export const useUserStore = defineStore("user", {
  actions: {
    async fetchUserAndBlogs() {
      const { user } = await RetrieveUser();
      this.user = user || null;

      if (user) {
        this.blogs = await QueryMyBlogs(user.id);
      } else {
        this.blogs = [];
      }
    },
    async login() {
      await SignIn(this.email, this.password);

      await this.fetchUserAndBlogs();
    },
    async register() {
      await SignUp(this.email, this.password);
    },
    async logout() {
      await SignOut();
      this.user = null;
      this.blogs = [];
    },

    async addBlog(content: string, title: string) {
      if (!this.user) {
        throw new Error("用户未登录");
      }
      await AddBlog(this.user.id, content, title); // 先添加
      await this.fetchUserAndBlogs(); // 再刷新用户和博客列表
      await this.fetchAllBlogs();
    },
    async fetchAllBlogs() {
      this.allBlogs = await QueryAllBlogs();
    },
    async deleteBlog(blogId: string) {
      if (!this.user) throw new Error("用户未登录");

      try {
        await DeleteBlog(blogId);
        // 本地同步
        this.blogs = this.blogs.filter((blog) => blog.id !== blogId);
        this.allBlogs = this.allBlogs.filter((blog) => blog.id !== blogId);
        console.log("删除成功");
      } catch (error) {
        console.error("删除失败:", error);
        throw new Error("删除失败，请稍后再试");
      }
    },
  },
  state() {
    return {
      user: null as null | any,
      blogs: [] as any[], // 当前用户博客
      allBlogs: [] as any[], // 全部博客
      email: "",
      password: "",
    };
  },

  persist: {
    // CONFIG OPTIONS HERE
    key: "user-store", // localStorage 的 key
    storage: localStorage, // 也可以换成 sessionStorage
    pick: ["user", "blogs"], // 只持久化这两个字段
    debug: true,
  },
});
