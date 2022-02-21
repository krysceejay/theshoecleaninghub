import {FC, useState} from 'react'
import { useNavigate } from 'react-router-dom'

const SelectAddress: FC = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        address: '',
        email: '',
        phoneNumber: '',
        password: '',
        showPass: false
      })
    
      const { address, email, phoneNumber, password, showPass } = formData
    
      const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
      }

    const handleSubmit = async () => {
      navigate("/pick-up")
    }
    
  return (
    <div className="pb-40">
      <section className="sticky top-0 bg-white">
        <header className="flex items-center justify-center relative py-5 shadow-sm">
          <div onClick={() => navigate(-1)} className="cursor-pointer absolute left-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="text-lg text-center font-medium">Select Address</span>
        </header>
      </section>
      <section className="px-4">
        <h3 className="text-xl text-clight font-medium mt-4">Pick up Address</h3>
        <div className="mt-4">
          <div className="mb-6">
            <label className="block mb-2 text-xs ">
            Address
            </label>
            <input className="border rounded-lg w-full h-12 px-4  focus:outline-none" 
              required
              type="text"
              name="address"
              placeholder="Enter pick up address"
              value={address} onChange={handleOnchange}
            />
          </div>
          <div className="flex items-center space-x-5">
            <div className="flex-1">
              <label className="block mb-2 text-xs ">
              State
              </label>
              <input className="border rounded-lg w-full h-12 px-4  focus:outline-none" 
                required
                type="text"
                name="address"
                placeholder="Enter state"
                value={address} onChange={handleOnchange}
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-xs ">
              City
              </label>
              <input className="border rounded-lg w-full h-12 px-4  focus:outline-none" 
                required
                type="text"
                name="address"
                placeholder="Enter city"
                value={address} onChange={handleOnchange}
              />
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-xl text-clight font-medium">Delivery Address</h3>
            <div className="flex items-center space-x-3 mt-4">
              <div className="w-4 h-4 flex-none">
                {/* <img src="/img/rec.png" alt="Cat" className="w-full h-full object-cover" /> */}
                <img src="/img/radio-on-button.png" alt="Cat" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm text-dark-yellow">Same as above</span>
            </div>
            <div className="mb-6 mt-5">
              <label className="block mb-2 text-xs ">
              Address
              </label>
              <input className="border rounded-lg w-full h-12 px-4  focus:outline-none" 
                required
                type="text"
                name="address"
                placeholder="Enter pick up address"
                value={address} onChange={handleOnchange}
              />
            </div>
            <div className="flex items-center space-x-5">
              <div className="flex-1">
                <label className="block mb-2 text-xs ">
                State
                </label>
                <input className="border rounded-lg w-full h-12 px-4  focus:outline-none" 
                  required
                  type="text"
                  name="address"
                  placeholder="Enter state"
                  value={address} onChange={handleOnchange}
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2 text-xs ">
                City
                </label>
                <input className="border rounded-lg w-full h-12 px-4  focus:outline-none" 
                  required
                  type="text"
                  name="address"
                  placeholder="Enter city"
                  value={address} onChange={handleOnchange}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hide on focus input */}
      <section className="fixed bottom-0 bg-white w-full px-4 pt-6 pb-8 cat-total">
        <div className="border-dashed border-cgrey-1 pb-4 border-b">
          <div className="flex items-center justify-between">
            <span className="text-cgrey-2">Items</span>
            <span>₦16,500</span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-cgrey-2">Delivery</span>
            <span>₦0</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <span className="text-clight">TOTAL</span>
          <span className="text-lg font-bold text-dark-yellow">₦16,500</span>
        </div>
        <button
            onClick={handleSubmit}
            type="button"
            className={`${email && password ? "bg-cdark text-white" : "bg-cgrey-1 text-clight"} py-4 rounded-xl border-0 text-center w-full mt-7`}>
            Proceed
        </button>
      </section>
    </div>
    )
}

export default SelectAddress
