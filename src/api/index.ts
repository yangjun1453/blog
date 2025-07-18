import { supabase } from "../lib/supabaseClient";

export async function SignUp(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function RetrieveUser() {
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
export async function SignIn(email, password) {
const { data, error } = await supabase.auth.signInWithPassword({
  email,
  password
  
}

 

)
if (error) {
    throw new Error(error.message);
  }
  return data;
}
export async function SignOut() {
const { error } = await supabase.auth.signOut()
if(error){
    throw new Error(error.message);
}

}


export async function Addcs(id,content) {
    const { error } = await supabase
  .from('blog')
  .insert({ user_id: id, content: content })

  if(error){
    throw new Error(error.message);
  }
}

export async function QueryMyBlogs(userId) {
  const { data, error } = await supabase
    .from('blog') // 表名
    .select('*')  // 查询所有列
    .eq('user_id', userId); // 查询条件：user_id 等于当前登录用户的 id

  if (error) {
    throw new Error(error.message);
  }

  return data;
}