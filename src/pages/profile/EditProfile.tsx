import {FC, useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'

const EditProfile: FC = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: 'Kemi Ifeturoti',
    email: 'kemi.turoti@gmail.com',
    phoneNumber: '08199330998',
    password: '',
    showPass: false
  })

  const { fullName, email, phoneNumber, password, showPass } = formData

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  return (
    <div>
      <section className="sticky top-0 bg-white">
        <header className="flex items-center justify-center relative py-5 shadow-sm">
          <div onClick={() => navigate(-1)} className="cursor-pointer absolute left-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="text-lg text-center font-medium">Edit Profile</span>
        </header>
      </section>
      <section className="mt-6 px-4 text-center">
        <div className="w-[88px] h-[88px] rounded-full mx-auto relative">
          <img src="/img/propix.png" alt="Propix" className="w-full h-full object-cover" />
          <div className="bg-edit-profile-overlay absolute inset-0 rounded-full flex items-center justify-center">
            <div className="w-5 h-[18px]">
              <img src="/img/camera.png" alt="Camera" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <span className="text-clight mt-3 block text-xs">Tap to change profile picture</span>
      </section>
      <section className="px-4 mt-8">
        <div className="mb-6">
          <label className="block mb-2 text-xs ">
          Full name
          </label>
          <input className="border rounded-lg w-full h-12 px-4 focus:outline-none" 
            required
            type="text"
            name="fullName"
            placeholder="Enter full name"
            value={fullName} onChange={handleOnchange}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-xs ">
          Email address
          </label>
          <input className="border rounded-lg w-full h-12 px-4 focus:outline-none" 
            required
            type="email"
            name="email"
            placeholder="Enter email"
            value={email} onChange={handleOnchange}
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-xs ">
          Phone number
          </label>
          <input className="border rounded-lg w-full h-12 px-4 focus:outline-none" 
            required
            type="text"
            name="phoneNumber"
            placeholder="Enter phone number"
            value={phoneNumber} onChange={handleOnchange}
          />
        </div>
      </section>
      <section className="fixed bottom-8 w-full px-4">
        <button
            type="button"
            className="bg-cdark text-white py-4 rounded-xl border-0 text-center w-full block">
            Save
        </button>
      </section>
    </div>
    )
}

export default EditProfile