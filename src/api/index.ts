import { supabase } from "../lib/supabaseClient";
import { createAvatar } from "@dicebear/core";
import { bigSmile } from "@dicebear/collection";
// 注册
export async function SignUp(email: string, password: string): Promise<any> {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        avatar: await getAvatarDataUri(email),
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

// 获取当前用户
export async function RetrieveUser(): Promise<{ user: any; error: any }> {
  const { data } = await supabase.auth.getSession();
  const accessToken = data.session?.access_token;

  if (accessToken) {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(accessToken);

    return { user, error };
  } else {
    console.log("没有 session，用户未登录");
    return { user: null, error: "用户未登录" };
  }
}

// 登录
export async function SignIn(email: string, password: string): Promise<any> {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

// 登出
export async function SignOut(): Promise<void> {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
}

// 添加博客内容
export async function AddBlog(
  id: string,
  content: string,
  title: string
): Promise<void> {
  const { error } = await supabase
    .from("blogs")
    .insert({ user_id: id, content: content, title: title });

  if (error) {
    throw new Error(error.message);
  }
}

// 查询当前用户的博客
export async function QueryMyBlogs(userId: string): Promise<any[]> {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

// 查询所有博客
export async function QueryAllBlogs(): Promise<any[]> {
  const { data, error } = await supabase.from("blogs").select("*");

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

// 获取头像
export async function getAvatarDataUri(email: string) {
  return await createAvatar(bigSmile, {
    seed: email,
    size: 70,
    backgroundType: ["gradientLinear"],
  }).toDataUri();
}
// 删除博客
export async function DeleteBlog(blogId: string): Promise<void> {
  const { error } = await supabase.from("blogs").delete().eq("id", blogId);

  if (error) {
    throw new Error(error.message);
  }
}
