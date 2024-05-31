import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { signOut } from "./action";

export default async function Home() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();
  const isLoggedIn = !!data?.user;

  if (!isLoggedIn) return <Link href="/login">Log in</Link>;

  return (
    <main className="flex flex-col gap-5 items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        Logged in as {data?.user?.email}
      </div>
      <form action={signOut} className="flex flex-col gap-4 prose">
        <button className="btn btn-primary">Log out</button>
      </form>
    </main>
  );
}
