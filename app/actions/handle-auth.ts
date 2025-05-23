"use server"

import { auth, signIn, signOut } from "@/app/lib/auth";

export async function handleAuth() {
  const session = await auth();

  if (session) {
    return signOut({
      redirectTo: "/login",
    })
  }

  return await signIn("google", {
    redirectTo: "/dashboard",
  })
}