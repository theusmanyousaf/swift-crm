import { auth } from '@/auth'
import Link from 'next/link';
import Navbar from '@/components/navbar/Navbar'

export default async function Home() {
  const session = await auth();

  if (session) {
    return (
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", margin: "40px auto 0" }}>
        <h1 style={{ color: "red" }}>Cannot access the contents of this page</h1>
        <h3><span style={{ color: "skyblue" }}>{session.user?.name}</span> is logged in go to <Link href="/dashboard"><button style={{ border: "1px solid skyblue", padding: "6px 10px", borderRadius: "4px", fontWeight: "bold", backgroundColor: "white", cursor: "pointer" }}>Dashboard</button></Link></h3>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-10 mt-10">
      <Navbar />
      <div className="sm:text-5xl text-2xl font-bold">Home Page</div>
    </div>
  )
}
