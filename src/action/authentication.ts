import supabase from "@/utils/supabase";

export async function userLogin(email: string, password: string) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  return { data, error };
}

export async function userSignup(email: string, password: string) {
  let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  return { data, error };
}

export async function forgotPasswordEmail(email: string) {
  let { data, error } = await supabase.auth.resetPasswordForEmail(email);

  return { data, error };
}
