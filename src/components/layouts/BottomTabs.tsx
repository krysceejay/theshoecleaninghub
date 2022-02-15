//import React from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'

const BottomTabs = () => {
  return (
      <main>
        <Outlet />
        <div className="fixed bottom-0 w-full z-10 tab-c">
            <ul className="flex justify-between items-center bg-white">
                <li className="px-4 py-2 text-center">
                    <NavLink
                        to="/home"
                        children={({ isActive }) => {
                            return (
                            <>
                                {isActive ? 
                                <img src="/img/active-home-icon.png" alt="Active Home Icon" className="w-7 h-7 object-contain mx-auto" /> :
                                <img src="/img/home-icon.png" alt="Home Icon" className="w-7 h-7 object-contain mx-auto" /> }
                                <span className={`${isActive && "text-dark-yellow"} text-xs`}>Home</span>
                            </>
                            )
                        }}
                    />
                </li>
                <li className="px-4 py-2 text-center">
                    <NavLink
                        to="/orders"
                        children={({ isActive }) => {
                            return (
                            <>
                                {isActive ? 
                                <img src="/img/active-order-icon.png" alt="Active Order Icon" className="w-7 h-7 object-contain mx-auto" /> :
                                <img src="/img/order-icon.png" alt="Order Icon" className="w-7 h-7 object-contain mx-auto" /> }
                                <span className={`${isActive && "text-dark-yellow"} text-xs`}>Orders</span>
                            </>
                            )
                        }}
                    />
                </li>
                <li className="px-4 py-2 text-center">
                    <NavLink
                        to="/profile"
                        children={({ isActive }) => {
                            return (
                            <>
                                {isActive ? 
                                <img src="/img/active-profile-icon.png" alt="Active Profle Icon" className="w-7 h-7 object-contain mx-auto" /> :
                                <img src="/img/profile-icon.png" alt="Profile Icon" className="w-7 h-7 object-contain mx-auto" /> }
                                <span className={`${isActive && "text-dark-yellow"} text-xs`}>Profile</span>
                            </>
                            )
                        }}
                    />
                </li>
            </ul>
        </div>
      </main>
  )
}

export default BottomTabs
