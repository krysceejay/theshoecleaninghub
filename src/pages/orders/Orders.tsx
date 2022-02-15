import React, {FC} from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Orders: FC = () => {
    const navigate = useNavigate()
  return (
    <div>
        <header className="flex items-center justify-center relative pt-10 pb-7 tab-c">
          <div onClick={() => navigate(-1)} className="cursor-pointer absolute left-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <span className="text-lg text-center">Select Shoes</span>
        </header>
        <section className="sticky top-0">
            <div className="carousel-wrp px-4">
                <div className="carousel-item active">White/Light Shoes</div>
                <div className="carousel-item">Dark Shoes</div>
                <div className="carousel-item">Corporate Shoes</div>
                <div className="carousel-item">Heels</div>
                <div className="carousel-item">Slippers</div>
                <div className="carousel-item">Others</div>
            </div>
        </section>
    </div>
    )
}

export default Orders