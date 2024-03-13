import React from "react"
import Image from "next/image"
import Link from "next/link"
import { authGithub } from "@/libs/auth-libs"
import { redirect } from "next/navigation"
const page = async () => {
  const user = await authGithub()

  if (!user) redirect("/")

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-3">
      <Image
        src={user?.image}
        alt=""
        width={1000}
        height={1000}
        className="w-36 h-36 rounded-full"
      />
      <p>Welcome {user?.name}</p>
      <p>{user?.email}</p>
      <Link
        href={"api/auth/signout"}
        className="btn rounded-lg border bg-black border-white text-white transition-all cursor-pointer hover:bg-white hover:text-black hover:border-black hover:scale-105"
      >
        Sign Out
      </Link>
    </div>
  )
}

export default page
