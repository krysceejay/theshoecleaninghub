import React, {FC, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Login: FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { email, password } = formData

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    //console.log(name, value)
    setFormData({...formData, [name]: value})
  }

  return (
    <div className="">
      <div className="bg-yellow-300 px-4 py-10">
        <div onClick={() => navigate(-1)} className="cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="w-14 h-14 mt-5">
          <img src="/img/colored-logo.png" alt="Logo" className="w-full h-full object-cover" />
        </div>
        <div className="mt-4">
          <h3 className="text-2xl leading-7 text-cdark">Welcome</h3>
          <span className="text-sml text-cdark">Sign in to continue</span>
        </div>
      </div>
      <div className="px-4 pt-4">
        <form>
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
          <div className="mb-6">
            <label className="block mb-2 text-xs text-cdark">
            Password
            </label>
            <div className="flex items-center">
              <input className="border border-r-0 rounded-l-lg h-12 w-full px-4 focus:outline-none" 
                required
                type="password"
                name="password"
                placeholder="Enter Password"
                value={password} onChange={handleOnchange}
              />
              <div className="bg-white border border-l-0 h-12 w-16 flex justify-center items-center rounded-r-lg cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login