"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signIn(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    emailRedirectTo: "/",
  };

  const { error } = await supabase.auth.signInWithOtp(data);

  if (error) {
    console.error("Error logging in:", error.message);
  }

  revalidatePath("/", "layout");
  redirect("/");
}
