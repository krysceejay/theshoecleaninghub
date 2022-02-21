import {FC, useState, useRef, createRef, useEffect} from 'react'
import { useParams, useNavigate, NavLink } from 'react-router-dom'

interface ICatItems{
  id: string
  num: string
  img: string
}

interface ICategories{
  id: string
  title: string
  link: string
}

interface IRef{
  current: HTMLAnchorElement | null
}

const Category: FC = () => {
    const navigate = useNavigate()
    const contactRef = useRef<IRef[]>([])
    let { catname } = useParams()

    console.log(catname)

    const [totalNum, setTotalNum] = useState(2)
    const [myRef, setRef] = useState<IRef>()

    const categories: ICategories[] = [
      {id: "1", title: "White/Light Shoes", link: "/category/white-shoe"},
      {id: "2", title: "Dark Shoes", link: "/category/dark-shoe"},
      {id: "3", title: "Corporate Shoes", link: "/category/corporate-shoe"},
      {id: "4", title: "Heels", link: "/category/heels"},
      {id: "5", title: "Slippers", link: "/category/slippers"},
      {id: "6", title: "Others", link: "/category/others"},
    ]
    const catItems: ICatItems[] = [
      {id: "1", num: "#123", img: "white-midsole.png"},
      {id: "2", num: "#123", img: "white-midsole.png"},
      {id: "3", num: "#123", img: "white-midsole.png"},
      {id: "4", num: "#123", img: "white-midsole.png"},
      {id: "5", num: "#123", img: "white-midsole.png"},
      {id: "6", num: "#123", img: "white-midsole.png"},
    ]

    contactRef.current = categories.map((_, i) => contactRef.current[i] ?? createRef())

    //console.log(contactRef.current);

    // useEffect(() => {
    //   //console.log(myRef?.current)
      
    //   window.scrollTo(500, 0)
      
    //   //window.scrollTo(0, 0)
    // }, [myRef])
    

    // const gotoContact = (ref: IRef) => {
    //   //console.log(ref.current)
       
      
    //   // window.scrollTo({ 
    //   //   left: ref.current?.offsetLeft,
    //   //   behavior: 'smooth'
    //   // })
    //   //if(ref.current) window.scrollTo(ref.current.offsetLeft, 0)
    // }

    const handleSubmit = async () => {
      navigate("/review-orders")
    }
    
  return (
    <div className="pb-20">
      <section className="sticky top-0 bg-white">
        <header className="flex items-center justify-center relative py-5 shadow-sm">
          <div onClick={() => navigate("/home")} className="cursor-pointer absolute left-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="text-lg text-center font-medium">Select Shoes</span>
        </header>
        <div className="carousel-wrp p-4 shadow-sm">
          {categories.map((cat, i) => (
            <NavLink 
              ref={contactRef.current[i]}
              key={cat.id} 
              to={cat.link} 
              className={({ isActive }) => isActive ? "carousel-item active" : "carousel-item" }
              //onClick={gotoContact}
              onClick={() => setRef(contactRef.current[i])}
              >
              {cat.title}
            </NavLink>
          ))}
        </div>
      </section>
      <section className="px-4">
        <div className="grid grid-cols-1 gap-0 mt-4">
          {catItems.map(ct => (
            <div key={ct.id} className="py-4 border-b-06 border-cgrey-1">
              <div className="flex items-center justify-between">
                <div className="flex space-x-3 mr-2">
                  <div className="w-wcat-shoe h-hcat-shoe rounded-lg overflow-hidden flex-none">
                    <img src={`/img/${ct.img}`} alt="Cat" className="w-full h-full object-cover" />
                  </div>
                  <div className="py-1 w-3/4">
                    <h3 className="leading-none text-sml">White & Light colors</h3>
                    <p className="text-xs text-cgrey-2 mt-1">₦2,000 / pair</p>
                    <p className="text-lg text-dark-yellow mt-1 font-bold">₦2,000</p>
                  </div>
                </div>
                <div className="flex-none">
                  <span className="text-sml text-clight text-right font-medium block">x1</span>
                  <div className="mt-4">
                    <button className="border border-dark-yellow text-dark-yellow rounded p-1.5 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <button className="border border-dark-yellow text-dark-yellow rounded p-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-6 px-4">
        <div className="flex space-x-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-dark-yellow" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <span className="text-xs text-clight">You can select multiple shoe types across different categories before reviewing your order.</span>
        </div>
      </section>
      <section className="fixed bottom-0 bg-white w-full px-4 pt-6 pb-8 cat-total">
        <div className="flex items-center justify-between">
          <span className="text-clight">Total Price (2)</span>
          <span className="text-lg font-bold text-dark-yellow">₦3,500</span>
        </div>
        <button
        onClick={handleSubmit}
          type="button"
          className={`${totalNum ? "bg-cdark text-white" : "bg-cgrey-1 text-clight"} py-4 rounded-xl border-0 text-center w-full mt-7`}>
            Review Order
        </button>
      </section>
    </div>
    )
}

export default Category
