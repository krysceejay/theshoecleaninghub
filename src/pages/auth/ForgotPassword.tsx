import React, {FC, useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'

const ForgotPassword: FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    console.log(email)
  }

  return (
    <div className="">
      <div className="bg-cmain sticky top-0">
        <div className="px-4 py-10 overflow-hidden relative">
          <div onClick={() => navigate(-1)} className="cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="w-14 h-14 mt-5">
            <img src="/img/colored-logo.png" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <div className="mt-4">
            <h3 className="text-2xl leading-7 text-cdark font-bold">Password Reset</h3>
            <span className="text-sml text-cdark">Get a new password</span>
          </div>
          <div className="w-32 h-32 absolute -right-3 -bottom-6">
            <img src="/img/bw-logo.png" alt="BWLogo" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
      <div className="px-4 pt-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-xs text-cdark">
            Email address
            </label>
            <input className="border rounded-lg w-full h-12 px-4 text-cdark focus:outline-none" 
              required
              type="email"
              name="email"
              placeholder="Enter Email address"
              value={email} onChange={handleOnchange}
            />
          </div>
          <div>
            <button
            type="submit"
            className={`${email ? "bg-cdark text-white" : "bg-cgrey-1 text-clight"} font-bold py-3 rounded-xl border-0 text-center w-full mt-8`}>
              Send Reset Link
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword