//import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const BottomTabs = () => {
  return (
      <main>
        <Outlet />
        <div className="fixed bottom-0 w-full z-10">
            <ul className="flex justify-between items-center bg-white">
                <li className="p-4 text-center current">
                    <Link to="/home">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className="text-xs">Home</span>
                    </Link>
                </li>
                <li className="p-4 text-center">
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                        <span className="text-xs">Orders</span>
                    </Link>
                </li>
                <li className="p-4 text-center">
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="text-xs">Profile</span>
                    </Link>
                </li>
            </ul>
        </div>
      </main>
  )
}

export default BottomTabs
