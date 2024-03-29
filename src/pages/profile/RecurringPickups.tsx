import {FC} from 'react'
import { useNavigate } from 'react-router-dom'

const RecurringPickups: FC = () => {
  const navigate = useNavigate()
    
  return (
    <div>
      <section className="sticky top-0 bg-white">
        <header className="flex items-center justify-center relative py-5 shadow-sm">
          <div onClick={() => navigate(-1)} className="cursor-pointer absolute left-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="text-lg text-center font-medium">Recurring pickups</span>
        </header>
      </section>
      <section className="px-4 mt-4">
        <h3 className="text-xl text-clight font-medium mt-4">Pickup #1</h3>
        <div className="flex items-center justify-between py-4 border-cgrey-1 border-b-[0.4px]">
          <span className="text-clight">Pickup Date</span>
          <span className="font-medium">Jan 12th, 2022</span>
        </div>  
        <div className="flex items-center justify-between py-4 border-cgrey-1 border-b-[0.4px]">
          <span className="text-clight">Pickup Time</span>
          <span className="font-medium">12:00pm</span>
        </div>  
        <div className="flex items-center justify-between py-4 border-cgrey-1 border-b-[0.4px]">
          <span className="text-clight">Pickup Address</span>
          <span className="font-medium w-1/2 whitespace-nowrap overflow-hidden text-ellipsis resize-none text-right">Victoria Garden City, Lekki, Lagos</span>
        </div>  
        <div className="flex items-center justify-between py-4 border-cgrey-1 border-b-[0.4px]">
          <span className="text-clight">Delivery Address</span>
          <span className="font-medium w-1/2 whitespace-nowrap overflow-hidden text-ellipsis resize-none text-right">Victoria Garden City, Lekki, Lagos</span>
        </div>  
      </section>
      <section className="px-4 mt-8">
        <h3 className="text-xl text-clight font-medium mt-4">Pickup #2</h3>
        <div className="flex items-center justify-between py-4 border-cgrey-1 border-b-[0.4px]">
          <span className="text-clight">Pickup Date</span>
          <span className="font-medium">Every week</span>
        </div>  
        <div className="flex items-center justify-between py-4 border-cgrey-1 border-b-[0.4px]">
          <span className="text-clight">Pickup Time</span>
          <span className="font-medium">10:00am</span>
        </div>  
        <div className="flex items-center justify-between py-4 border-cgrey-1 border-b-[0.4px]">
          <span className="text-clight">Pickup Address</span>
          <span className="font-medium w-1/2 whitespace-nowrap overflow-hidden text-ellipsis resize-none text-right">Lekki Phase 1</span>
        </div>  
        <div className="flex items-center justify-between py-4 border-cgrey-1 border-b-[0.4px]">
          <span className="text-clight">Delivery Address</span>
          <span className="font-medium w-1/2 whitespace-nowrap overflow-hidden text-ellipsis resize-none text-right">Lekki Phase 1</span>
        </div>  
      </section>

    </div>
    )
}

export default RecurringPickups
