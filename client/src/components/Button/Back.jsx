"use client"

import React from "react"

// assets
import { IoMdArrowRoundBack } from "react-icons/io"
import { useRouter } from "next/navigation"

const Back = () => {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <button onClick={handleBack} className="flex items-center gap-3">
      <div className="bg-white p-2 rounded-full ">
        <IoMdArrowRoundBack />
      </div>
      <p className="text-white">Back</p>
    </button>
  )
}

export default Back
