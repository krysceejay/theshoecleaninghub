import {FC} from 'react'
import { useNavigate, useParams } from 'react-router-dom'

interface IOrderItems{
    id: string
    num: string
    unit: number
    price: number
  }

const OrderDetails: FC = () => {
  const navigate = useNavigate()
  let { orderNum } = useParams()

  const orderItems: IOrderItems[] = [
    {id: "1", num: "#123", unit: 1, price: 2000},
    {id: "2", num: "#123", unit: 1, price: 2000},
    {id: "3", num: "#123", unit: 1, price: 2000},
    {id: "4", num: "#123", unit: 1, price: 2000},
    {id: "5", num: "#123", unit: 1, price: 2000},
  ]
    
  return (
    <div>
      <section className="sticky top-0 bg-white">
        <header className="flex items-center justify-center relative py-5 shadow-sm">
          <div onClick={() => navigate(-1)} className="cursor-pointer absolute left-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="text-lg text-center font-medium">Order No: #{orderNum}</span>
        </header>
      </section>
      <section className="px-4 mt-4">
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
        <h3 className="text-xl text-clight font-medium">Item List</h3>
        <div className="mt-4 border-dashed border-cgrey-1 pb-10 border-b">
          {orderItems.map(ct => (
              <div key={ct.id} className="flex items-center justify-between mt-4">
                <div>
                  <span className="font-medium">1</span>
                  <span className="text-cgrey-2 font-medium"> x White & Light colors</span>
                </div>
                <span className="font-medium">₦2,000</span>
              </div>
          ))}
        </div>
      </section>
      <section className="px-4">
        <div className="flex items-center justify-between mt-4">
          <span className="text-cgrey-2">Delivery</span>
          <span className="font-medium">₦1,500</span>
        </div>
      </section>
      <section className="fixed bottom-0 bg-white w-full px-4 pt-6 pb-8 cat-total">
        <div className="flex items-center justify-between">
          <span className="text-clight">TOTAL</span>
          <span className="text-lg font-bold text-dark-yellow">₦16,500</span>
        </div>
      </section>

    </div>
    )
}

export default OrderDetails
