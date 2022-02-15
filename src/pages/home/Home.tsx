import {FC} from 'react'
import { Link } from 'react-router-dom'

interface IOrders {
  id: string
  num: string
}

const Home: FC = () => {
  const orders: IOrders[] = [
    {id: "1", num: "#123"},
    {id: "2", num: "#123"},
    {id: "3", num: "#123"},
  ]
  return (
    <div className="px-4">
      <header className="pt-10 flex items-center justify-between">
        <div>
          <h3 className="text-lg leading-5 font-medium">Welcome Kemi 👋</h3>
          <span className="text-sml text-clight mt-2">Got a shoe that needs cleaning?</span>
        </div>
        <div className="w-12 h-12 rounded-full">
          <img src="/img/propix.png" alt="Propix" className="w-full h-full object-cover" />
        </div>
      </header>
      <section className="flex items-center justify-between px-5 py-6 bg-light-yellow rounded-lg mt-8">
        <div>
          <span className="text-tiny block bg-white rounded-3xl py-1 px-2">The Shoe Cleaning Hub</span>
          <span className="text-dark-yellow font-black text-lg block leading-none mt-3">CLEAN SHOES</span>
          <span className="text-dark-yellow font-black text-lg block leading-none mt-1">HAPPY FEET...</span>
        </div>
        <div className="w-wshoe h-wshoe rounded-full bg-white flex justify-center items-center">
          <img src="/img/white-shoe.png" alt="Propix" className="w-20 h-14 object-contain" />
        </div>
      </section>
      <section className="mt-8">
        <h3 className="text-sml leading-tight font-medium">Category</h3>
        <div className="grid grid-cols-3 gap-3 mt-4">
          <Link 
            to={`/category/white-shoe`} 
            className="rounded-xl border border-light-grey overflow-hidden">
            <div className="h-16">
              <img src="/img/cat-white-shoe.png" alt="Cat White Shoes" className="w-full h-full object-cover" />
            </div>
            <div className="p-2 text-xs">White/Light Shoes</div>
          </Link>
          <Link 
          to={`/category/dark-shoe`}
          className="rounded-xl border border-light-grey overflow-hidden">
            <div className="h-16">
              <img src="/img/cat-black-shoe.png" alt="Cat Dark Shoes" className="w-full h-full object-cover" />
            </div>
            <div className="p-2 text-xs">Dark Shoes</div>
          </Link>
          <Link 
            to={`/category/corporate-shoe`}
            className="rounded-xl border border-light-grey overflow-hidden">
            <div className="h-16">
              <img src="/img/cat-corporate.png" alt="Cat Corporate" className="w-full h-full object-cover" />
            </div>
            <div className="p-2 text-xs">Corporate Shoes</div>
          </Link>
          <Link 
            to={`/category/heels`}
            className="rounded-xl border border-light-grey overflow-hidden">
            <div className="h-16">
              <img src="/img/cat-heels.png" alt="Cat Heels" className="w-full h-full object-cover" />
            </div>
            <div className="p-2 text-xs">Heels</div>
          </Link>
          <Link 
            to={`/category/slippers`}
            className="rounded-xl border border-light-grey overflow-hidden">
            <div className="h-16">
              <img src="/img/cat-slippers.png" alt="Cat Slippers" className="w-full h-full object-cover" />
            </div>
            <div className="p-2 text-xs">Slippers</div>
          </Link>
          <Link 
            to={`/category/others`}
            className="rounded-xl border border-light-grey overflow-hidden min-h-cat-s-h">
            <div className="h-16">
              <img src="/img/cat-bags.png" alt="Cat Others" className="w-full h-full object-cover" />
            </div>
            <div className="p-2 text-xs">Others</div>
          </Link>
        </div>
      </section>
      <section className="mt-8">
        <div className="flex items-center justify-between">
          <h3 className="text-sml leading-tight font-medium">Active Orders</h3>
          <Link to="/user/orders" className="text-sm text-dark-yellow font-medium">View all</Link>
        </div>
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
            <div key={ord.id} className="px-5 py-4 border-06 border-active-order-border flex space-x-4 rounded-lg">
              <img src="/img/list-icon.png" alt="List Icon" className="w-6 h-6" />
              <div>
                <p className="leading-none text-sml">Order No: #23122</p>
                <p className="text-xs text-dark-yellow mt-1">Order Confirmed</p>
              </div>
            </div>
          ))}
        </div>}
      </section>
    </div>
  )
}

export default Home
