import React, {FC, useState, useRef, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const VerifyAccount: FC = () => {
  const navigate = useNavigate()
  const [pincode, setPincode] = useState({
    pin1: '',
    pin2: '',
    pin3: '',
    pin4: '',
    pin5: '',
    pin6: '',
  })

  const pin1Ref = useRef<HTMLInputElement>(null)
  const pin2Ref = useRef<HTMLInputElement>(null)
  const pin3Ref = useRef<HTMLInputElement>(null)
  const pin4Ref = useRef<HTMLInputElement>(null)
  const pin5Ref = useRef<HTMLInputElement>(null)
  const pin6Ref = useRef<HTMLInputElement>(null)

  const {pin1, pin2, pin3, pin4, pin5, pin6} = pincode

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>, ref: React.RefObject<HTMLInputElement>) => {
    const {name, value} = e.target
    if (value.length <= 1) setPincode({...pincode, [name]: value})
    if(value.length >= 1) ref.current?.focus()
  }

  useEffect(() => {
    pin1Ref.current?.focus()
  }, [])
  

  const handleSubmit = async () => {
    navigate("/home")
  }

  return (
    <div>
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
            <h3 className="text-2xl leading-7">Verify Account</h3>
            <span className="text-sml  block w-9/12 mt-2">Enter the six digit code sent to your email address </span>
          </div>
          <div className="w-32 h-32 absolute -right-3 -bottom-6">
            <img src="/img/bw-logo.png" alt="BWLogo" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
      <div className="px-4 pt-12">
          <div className="flex items-center space-x-2">
            <input className="border rounded-lg w-full h-12 px-4  focus:outline-none font-bold text-lg text-center" 
              ref={pin1Ref}
              required
              type="number"
              name="pin1"
              value={pin1} onChange={e => handleOnchange(e, pin2Ref)}
            />
            <input className="border rounded-lg w-full h-12 px-4  focus:outline-none font-bold text-lg text-center" 
              ref={pin2Ref}
              required
              maxLength={1}
              type="number"
              name="pin2"
              value={pin2} onChange={e => handleOnchange(e, pin3Ref)}
            />
            <input className="border rounded-lg w-full h-12 px-4  focus:outline-none font-bold text-lg text-center" 
              ref={pin3Ref}
              required
              maxLength={1}
              type="number"
              name="pin3"
              value={pin3} onChange={e => handleOnchange(e, pin4Ref)}
            />
            <input className="border rounded-lg w-full h-12 px-4  focus:outline-none font-bold text-lg text-center" 
              ref={pin4Ref}
              required
              maxLength={1}
              type="number"
              name="pin4"
              value={pin4} onChange={e => handleOnchange(e, pin5Ref)}
            />
            <input className="border rounded-lg w-full h-12 px-4  focus:outline-none font-bold text-lg text-center" 
              ref={pin5Ref}
              required
              maxLength={1}
              type="number"
              name="pin5"
              value={pin5} onChange={e => handleOnchange(e, pin6Ref)}
            />

            <input className="border rounded-lg w-full h-12 px-4  focus:outline-none font-bold text-lg text-center" 
              ref={pin6Ref}
              required
              maxLength={1}
              type="number"
              name="pin6"
              value={pin6} onChange={e => handleOnchange(e, pin6Ref)}
            />
          </div>
          
          <div className="mt-16">
            <button
            onClick={handleSubmit}
            type="submit"
            className={`${pin1 && pin2 && pin3 && pin4 && pin5 && pin6  ? "bg-cdark text-white" : "bg-cgrey-1 text-clight"} py-3 rounded-xl border-0 text-center w-full`}>
              Verify
            </button>
          </div>
      </div>
    </div>
  )
}

export default VerifyAccount