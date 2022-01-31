import React, {FC, useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Register: FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    showPass: false
  })

  const { fullName, email, phoneNumber, password, showPass } = formData

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  const handleShowPass = () => {
    setFormData({...formData, showPass: !showPass})
  }
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
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
            <h3 className="text-2xl leading-7 text-cdark font-bold">Create Account</h3>
            <span className="text-sml text-cdark">Sign up for an account below</span>
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
            Full name
            </label>
            <input className="border rounded-lg w-full h-12 px-4 text-cdark focus:outline-none" 
              required
              type="text"
              name="fullName"
              placeholder="Enter Full name"
              value={fullName} onChange={handleOnchange}
            />
          </div>
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
            Phone number
            </label>
            <input className="border rounded-lg w-full h-12 px-4 text-cdark focus:outline-none" 
              required
              type="text"
              name="phoneNumber"
              placeholder="Enter Phone number"
              value={phoneNumber} onChange={handleOnchange}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-xs text-cdark">
            Password
            </label>
            <div className="flex items-center">
              <input className="border border-r-0 rounded-l-lg h-12 w-full px-4 focus:outline-none" 
                required
                type={`${showPass ? "text" : "password"}`}
                name="password"
                placeholder="Enter Password"
                value={password} onChange={handleOnchange}
              />
              <div 
              onClick={handleShowPass}
              className="bg-white border border-l-0 h-12 w-16 flex justify-center items-center rounded-r-lg cursor-pointer">
                {showPass ? 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                }
              </div>
            </div>
          </div>
          <span className="text-tiny text-clight block mx-auto text-center">By signing up, you agree to our  
            <Link to="/login" className="text-cdark font-semibold"> Terms of Use </Link> and
            <Link to="/login" className="text-cdark font-semibold"> Policy</Link>
          </span>
          <div>
            <button
            type="submit"
            className={`${email && password ? "bg-cdark text-white" : "bg-cgrey-1 text-clight"} font-bold py-3 rounded-xl border-0 text-center w-full mt-2`}>
              Create Account
            </button>
          </div>
          <span className="text-xs text-clight my-14 block mx-auto text-center">Already have an account? <Link to="/login" className="text-cdark font-semibold">Login</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Register