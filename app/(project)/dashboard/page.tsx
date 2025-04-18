import { handleAuth } from "@/app/actions/handle-auth";
import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
}

export default async function Dashboard() {
  // Estamos no lado do servidor!!!
  const session = await auth();

  if(!session) {
    return redirect("/login");
  }

  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Protected Dashboard</h1>
      <p>{session?.user?.email ? session.user.email : "Usuário não está logado!!!"}</p>

      {session?.user?.email && (
        <>
          <form action={handleAuth}>
            <button type="submit" className="border rounded-md px-4 py-2 cursor-pointer">
              Logout
            </button>
          </form>
          <Link href="/pagamentos" className="border rounded-md px-4 py-2 cursor-pointer">Pagamentos</Link>
        </>
      )}
    </div>
  );
}