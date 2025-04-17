import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-10">Landing Page</h1>

      <Link href="/login" className="border rounded-md px-4 py-2 cursor-pointer">Login</Link>
    </div>
  );
}
