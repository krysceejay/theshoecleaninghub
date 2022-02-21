import {FC, useState} from 'react'
import { useNavigate } from 'react-router-dom'

import OrderSuccessful from '../../components/modals/OrderSuccessful'

const PickUp: FC = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        address: '',
        email: '',
        password: '',
        switchBtn: false,
        modalVisible: false
      })
    
      const { address, email, password, switchBtn, modalVisible } = formData
    
      const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
      }

    const handleSwitch = () => {
      setFormData({...formData, switchBtn: !switchBtn})
    }
    const handleSubmit = () => {
      setFormData({...formData, modalVisible: true})
      //navigate("/review-orders")
    }

    const closeModal = () => {
      setFormData({...formData, modalVisible: false})
      //navigate("/review-orders")
    }
    
  return (
    <div className="pb-20">
        <OrderSuccessful modalVisible={modalVisible} closeModal={closeModal} />
      <section className="sticky top-0 bg-white">
        <header className="flex items-center justify-center relative py-5 shadow-sm">
          <div onClick={() => navigate(-1)} className="cursor-pointer absolute left-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="text-lg text-center font-medium">Pick Up Date & Time</span>
        </header>
      </section>
      <section className="px-4">
        <h3 className="text-xl text-clight font-medium mt-4">Pick up Date</h3>
        <div className="mt-4">
          <div className="mb-6">
            <label className="block mb-2 text-xs ">
            Date
            </label>
            <input className="border rounded-lg w-full h-12 px-4  focus:outline-none" 
              required
              type="date"
              name="address"
              placeholder="Enter pick up address"
              value={address} onChange={handleOnchange}
            />
          </div>
          <div className="mt-10">
            <h3 className="text-xl text-clight font-medium">Pick up Time</h3>
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="bg-light-grey rounded-lg text-center p-4 break-words">8:00am</div>
              <div className="bg-light-grey rounded-lg text-center p-4 break-words">10:00am</div>
              <div className="bg-light-grey rounded-lg text-center p-4 break-words">12:00pm</div>
              <div className="bg-light-grey rounded-lg text-center p-4 break-words">2:00pm</div>
              <div className="bg-light-grey rounded-lg text-center p-4 break-words">4:00pm</div>
              <div className="bg-light-grey rounded-lg text-center p-4 break-words">6:00pm</div>
            </div>
            <div className="flex items-center justify-between mt-10">
              <span>Recurring pickup?</span>
              <div className="w-[51px] h-[31px]" onClick={handleSwitch}>
                {switchBtn ? 
                <img src="/img/switch-on.png" alt="Switch On" className="w-full h-full object-cover" /> :
                <img src="/img/switch-off.png" alt="Switch Off" className="w-full h-full object-cover" /> }
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-12 px-4">
        <div className="flex space-x-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-dark-yellow" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <span className="text-xs text-clight">Please note that our cleaning process takes up to 3-5 working days.</span>
        </div>
      </section>
      {/* hide on focus input */}
      <section className="fixed bottom-0 bg-white w-full px-4 pt-6 pb-8 cat-total">
        <div className="flex items-center justify-between">
          <span className="text-clight">TOTAL</span>
          <span className="text-lg font-bold text-dark-yellow">₦16,500</span>
        </div>
        <button
            onClick={handleSubmit}
            type="button"
            className={`${email && password ? "bg-cdark text-white" : "bg-cgrey-1 text-clight"} py-4 rounded-xl border-0 text-center w-full mt-7`}>
            Make Payment
        </button>
      </section>

    </div>
    )
}

export default PickUp
