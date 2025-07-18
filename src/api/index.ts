import { supabase } from "../lib/supabaseClient";

// 注册
export async function SignUp(email: string, password: string): Promise<any> {
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

// 获取当前用户
export async function RetrieveUser(): Promise<{ user: any; error: any }> {
  const { data } = await supabase.auth.getSession();
  if (data.session) {
    const accessToken = data.session.access_token;
    console.log("当前 access_token 是：", accessToken);
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
export async function Addcs(id: string, content: string): Promise<void> {
  const { error } = await supabase
    .from("blog")
    .insert({ user_id: id, content: content });

  if (error) {
    throw new Error(error.message);
  }
}

// 查询当前用户的博客
export async function QueryMyBlogs(userId: string): Promise<any[]> {
  const { data, error } = await supabase
    .from("blog")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
