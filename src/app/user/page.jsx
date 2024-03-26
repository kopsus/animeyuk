import React from "react"
import Image from "next/image"
import { authGithub } from "@/libs/auth-libs"
// import { redirect } from "next/navigation"
import Link from "next/link"

// components
import SignOut from "@/components/Button/SignOut"

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
      <div className="flex gap-5 mb-10">
        <Link
          href={"user/collection"}
          className="btn bg-primary text-white hover:bg-blue-700 hover:scale-105 transition-all"
        >
          My Collection
        </Link>
        <button className="btn bg-primary text-white hover:bg-blue-700 hover:scale-105 transition-all">
          My Comment
        </button>
      </div>
      <SignOut />
    </div>
  )
}

export default page
