import {FC, useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'

import Logout from '../../components/modals/Logout'

const Profile: FC = () => {
    const navigate = useNavigate()

    const [modalVisible, setModalVisible] = useState(false)

    const handleSubmit = () => {
      setModalVisible(true)
    }

    const closeModal = () => {
      setModalVisible(false)
    }

  return (
    <div>
      <Logout modalVisible={modalVisible} closeModal={closeModal} />
      <section className="sticky top-0 bg-white">
        <header className="flex items-center justify-center relative py-5 shadow-sm">
          <span className="text-lg text-center font-medium">Profile</span>
        </header>
      </section>
      <section className="mt-6 px-4">
        <div className="w-[88px] h-[88px] rounded-full mx-auto">
          <img src="/img/propix.png" alt="Propix" className="w-full h-full object-cover" />
        </div>
        <div className="mx-auto text-center w-11/12 md:w-1/2 px-3 mt-4 break-words">
          <h3 className="text-lg">Kemi Ifeturoti</h3>
          <p className="mt-1 text-dark-yellow">kemi.turoti@gmail.com</p>
        </div>
        <div>
          <Link
            to="/profile/edit"
            className="bg-white text-dark-yellow py-3 rounded-[10px] border-[0.4px] border-dark-yellow text-center w-[75px] mt-5 text-sm block mx-auto">
            Edit
          </Link>
        </div>
      </section>
      <section className="mt-8 px-4">
        <h3 className="text-base font-medium">General</h3>
        <Link to="/profile/recurring-pickups" className="flex items-center justify-between py-4 border-cgrey-1 border-b-[0.4px]">
          <div className="flex items-center space-x-3.5">
            <div className="w-5 h-[18px]">
              <img src="/img/swap.png" alt="Swap" className="w-full h-full object-cover" />
            </div>
            <span>Recurring pickups</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-cgrey-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <div className="flex items-center justify-between py-4 border-cgrey-1 border-b-[0.4px]">
          <div className="flex items-center space-x-3.5">
            <div className="w-4 h-5">
              <img src="/img/paper.png" alt="Swap" className="w-full h-full object-cover" />
            </div>
            <span>Terms & Privacy</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-cgrey-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <div className="flex items-center justify-between py-4 border-cgrey-1 border-b-[0.4px]">
          <div className="flex items-center space-x-3.5">
            <div className="w-5 h-5">
              <img src="/img/call.png" alt="Swap" className="w-full h-full object-cover" />
            </div>
            <span>Contact Us +234 902 234 8889</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-cgrey-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
        <div onClick={handleSubmit} className="text-[#D75D47] text-center font-medium mt-10">Logout</div>
      </section>
      
    </div>
    )
}

export default Profile