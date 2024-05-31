import { signIn } from "./action";

export default async function Login() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <form action={signIn} className="flex flex-col gap-4 prose">
        <h1>Log in</h1>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input
            name="email"
            type="text"
            className="grow"
            placeholder="daisy@site.com"
          />
        </label>
        <button className="btn btn-primary">Submit</button>
      </form>
    </main>
  );
}
