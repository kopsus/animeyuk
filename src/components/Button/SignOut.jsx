import React from "react"
import Link from "next/link"

const SignOut = () => {
  return (
    <Link
      href={"api/auth/signout"}
      className="btn rounded-lg border bg-black border-white text-white transition-all cursor-pointer hover:bg-white hover:text-black hover:border-black hover:scale-105"
    >
      Sign Out
    </Link>
  )
}

export default SignOut
