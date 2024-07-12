"use client"

import React from "react"

// assets
import { CiSearch } from "react-icons/ci"
import { useRef } from "react"
import { useRouter } from "next/navigation"

const InputSearch = () => {
  const ref = useRef()
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    const keywoard = ref.current.value

    if (keywoard.trim() !== "") {
      router.push(`/search/${keywoard}`)
      ref.current.value = ""
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e)
    }
  }

  return (
    <div className="form-control relative w-11/12 mx-auto mt-5 lg:mt-0 lg:w-full flex flex-row gap-3">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered pr-10 bg-white"
        ref={ref}
        onKeyPress={handleKeyPress}
      />
      <div className="absolute right-28 top-3 cursor-pointer">
        <CiSearch color="black" size={25} />
      </div>

      <button
        className="btn rounded-lg border bg-black border-white text-white hover:bg-white hover:text-black transition-all cursor-pointer"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  )
}

export default InputSearch
