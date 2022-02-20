import {FC} from 'react'
import { useNavigate } from 'react-router-dom'

interface IOrderItems{
  id: string
  num: string
  unit: number
  price: number
}

const ReviewOrder: FC = () => {

    const navigate = useNavigate()

    const orderItems: IOrderItems[] = [
      {id: "1", num: "#123", unit: 1, price: 2000},
      {id: "2", num: "#123", unit: 1, price: 2000},
      {id: "3", num: "#123", unit: 1, price: 2000},
      {id: "4", num: "#123", unit: 1, price: 2000},
      {id: "5", num: "#123", unit: 1, price: 2000},
    ]

    const handleSubmit = async () => {
      navigate("/select-address")
    }
    
  return (
    <div className="pb-20">
      <section className="sticky top-0 bg-white">
        <header className="flex items-center justify-center relative py-5 shadow-sm">
          <div onClick={() => navigate(-1)} className="cursor-pointer absolute left-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="text-lg text-center font-medium">Review Order</span>
          <span onClick={() => navigate(-1)} className="text-dark-yellow block cursor-pointer absolute right-4">Edit</span>
        </header>
      </section>
      <section className="px-4">
        <h3 className="text-xl text-clight font-medium mt-4">Order Details</h3>
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
      <section className="mt-4 px-4">
        <div className="flex items-center justify-between mt-4">
          <span className="text-cgrey-2 font-medium">Subtotal</span>
          <span className="font-medium">₦16,500</span>
        </div>
      </section>
      <section className="mt-10 px-4">
        <div className="flex space-x-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-dark-yellow" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <span className="text-xs text-clight">Please note that our cleaning process takes up to 3-5 working days.</span>
        </div>
      </section>
      <section className="fixed bottom-0 bg-white w-full px-4 pt-6 pb-8 cat-total">
        <div className="flex items-center justify-between">
          <span className="text-clight">Total Price</span>
          <span className="text-lg font-bold text-dark-yellow">₦16,500</span>
        </div>
        <button
          onClick={handleSubmit}
          type="button"
          className="bg-cdark text-white py-4 rounded-xl border-0 text-center w-full mt-7">
            Proceed
        </button>
      </section>
    </div>
    )
}

export default ReviewOrder
