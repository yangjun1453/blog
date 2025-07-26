import { defineStore } from "pinia";
import { SignUp, RetrieveUser, SignIn, SignOut, QueryMyBlogs } from '../api/index'
export const useUserStore = defineStore('user', {
    actions: {

        async fetchUserAndBlogs() {
            const { user } = await RetrieveUser();
            this.user = user || null;

            if (user) {
                this.blogs = await QueryMyBlogs(user.id);
            } else {
                this.blogs = [];
            }
        }, async login() {
            await SignIn(this.email, this.password);

            await this.fetchUserAndBlogs();

        }, async register() {
            await SignUp(this.email, this.password)


        },
        async logout() {
            await SignOut();
            this.user = null;
            this.blogs = [];
        },




    },
    state() {
        return {
            user: null as null | any,
            blogs: [] as any[],
            email: '',
            password: '',

        }
    },

    persist: {
        // CONFIG OPTIONS HERE
        key: 'user-store',        // localStorage 的 key
        storage: localStorage,    // 也可以换成 sessionStorage
        pick: ['user', 'blogs'],  // 只持久化这两个字段
        debug: true
    }



})