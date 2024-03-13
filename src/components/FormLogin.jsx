import React from "react"
import Image from "next/image"

// assets
import Logo from "@/../public/Logo.png"
import { FaGoogle } from "react-icons/fa"

const FormLogin = ({ openFormLogin }) => {
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id={openFormLogin} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <label
            htmlFor={openFormLogin}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </label>
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
          <div className="flex items-center justify-center gap-3 bg-black text-white py-3 rounded-md cursor-pointer hover:bg-slate-800">
            <FaGoogle size={20} />
            <p>Continue with Google</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormLogin
