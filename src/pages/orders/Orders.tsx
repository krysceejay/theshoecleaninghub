import {FC} from 'react'
import { useNavigate, Link } from 'react-router-dom'

interface IOrders {
  id: string
  num: string
}

interface IOrderHistory {
  id: string
  num: string
}

const Orders: FC = () => {
    const navigate = useNavigate()

    const orders: IOrders[] = [
      {id: "1", num: "1237"},
      {id: "2", num: "1239"},
      {id: "3", num: "1235"},
    ]

    const orderHistory: IOrderHistory[] = [
      {id: "1", num: "1231"},
      {id: "2", num: "1242"},
      {id: "3", num: "1253"},
    ]

  return (
    <div>
        <section className="sticky top-0 bg-white">
          <header className="flex items-center justify-center relative py-5 shadow-sm">
            <span className="text-lg text-center font-medium">Orders</span>
          </header>
        </section>
        <section className="px-4">
          <h3 className="text-xl text-clight font-medium mt-4">Active Orders</h3>
          {orders?.length === 0 ? 
          <>
            <div className="h-12 w-12 bg-no-order-bg m-auto flex justify-center items-center rounded-full mt-8">
              <img src="/img/order-icon.png" alt="Order Icon" className="w-5 h-5 object-contain" />
            </div> 
            <span className="text-xs text-gray-400 block text-center mt-2">No active orders yet</span>
          </>
          : 
          <div className="grid grid-cols-1 gap-3 mt-4">
            {orders.map(ord => (
              <Link to={`/order/${ord.num}`} key={ord.id} className="px-5 py-4 border-06 border-active-order-border flex space-x-4 rounded-lg">
                <img src="/img/list-icon.png" alt="List Icon" className="w-6 h-6" />
                <div>
                  <p className="leading-none text-sml">Order No: #{ord.num}</p>
                  <p className="text-xs text-dark-yellow mt-1">Order Confirmed</p>
                </div>
              </Link>
            ))}
          </div>}
        </section>
        <section className="px-4 mt-10">
          <h3 className="text-xl text-clight font-medium">Order History</h3>
          {orderHistory?.length === 0 ? 
          <>
            <div className="h-12 w-12 bg-no-order-bg m-auto flex justify-center items-center rounded-full mt-8">
              <img src="/img/order-icon.png" alt="Order Icon" className="w-5 h-5 object-contain" />
            </div> 
            <span className="text-xs text-gray-400 block text-center mt-2">No order history</span>
          </>
          : 
          <div className="grid grid-cols-1 gap-3 mt-4">
            {orderHistory.map(ord => (
              <Link to={`/order/${ord.num}`} key={ord.id} className="px-5 py-4 border-06 border-active-order-border flex space-x-4 rounded-lg">
                <img src="/img/list-icon.png" alt="List Icon" className="w-6 h-6" />
                <div>
                  <p className="leading-none text-sml">Order No: #{ord.num}</p>
                  <p className="text-xs text-clight mt-1">Order Completed</p>
                </div>
              </Link>
            ))}
          </div>}
        </section>
    </div>
    )
}

export default Orders