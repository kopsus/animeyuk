import React from "react"
import Link from "next/link"
import Image from "next/image"
import { authGithub } from "@/libs/auth-libs"

const Auth = async () => {
  const user = await authGithub()

  return (
    <>
      {user ? (
        <Link href={"user"}>
          <Image
            src={user.image}
            alt="profile"
            width={1000}
            height={1000}
            className="w-10 h-10 rounded-full"
          />
        </Link>
      ) : (
        <Link
          href={"api/auth/signin"}
          className="btn rounded-lg border bg-black border-white text-white hover:bg-white hover:text-black transition-all cursor-pointer"
        >
          {"Sign in"}
        </Link>
      )}
    </>
  )
}

export default Auth
