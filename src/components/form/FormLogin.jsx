import React from "react"
import Image from "next/image"
import Link from "next/link"

// assets
import Logo from "@/../public/Logo.png"
import { FaGoogle } from "react-icons/fa"
import FormDaftar from "./FormDaftar"

const FormLogin = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="modal-box">
          <div className="flex flex-col gap-2 border-b border-black pb-5">
            <div className="overflow-hidden w-20 mx-auto">
              <Image src={Logo} alt="logo" width={1000} height={1000} />
            </div>
            <p className="text-2xl font-semibold text-center">
              Welcome to AnimeYuk
            </p>
          </div>
          <div className="text-sm text-center my-5">
            <p>Let's Make</p>
            <p>Your Anime Cinema</p>
          </div>
          <form className="flex flex-col">
            <div className="flex flex-col gap-3">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="text" className="grow" placeholder="Username" />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="password"
                />
              </label>
            </div>
            <button className="bg-primary btn mt-5 text-white hover:bg-blue-700">
              Login
            </button>
          </form>
          <p className="text-sm my-5">
            Belum punya akun?{" "}
            <Link
              href={"daftar"}
              className="text-sky-600 font-bold cursor-pointer"
            >
              Daftar
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default FormLogin
