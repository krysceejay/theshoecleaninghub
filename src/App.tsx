//import React from 'react'
import { Routes , Route } from 'react-router-dom'
import PrivateRoute from './routes/PrivateRoute'
import BottomTabs from './components/layouts/BottomTabs'

import Home from './pages/home/Home'
import Category from './pages/home/Category'
import ReviewOrder from './pages/home/ReviewOrder'
import SelectAddress from './pages/home/SelectAddress'
import PickUp from './pages/home/PickUp'

import Orders from './pages/orders/Orders'
import OrderDetails from './pages/orders/OrderDetails'

import Profile from './pages/profile/Profile'
import EditProfile from './pages/profile/EditProfile'
import RecurringPickups from './pages/profile/RecurringPickups'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ForgotPassword from './pages/auth/ForgotPassword'
import VerifyAccount from './pages/auth/VerifyAccount'

import Onboarding from './pages/Onboarding'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<BottomTabs />}>
          <Route path="home" element={<Home />} />
          <Route path="orders" element={<Orders />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="category/:catname" element={<Category />} />
        <Route path="review-orders" element={<ReviewOrder />} />
        <Route path="select-address" element={<SelectAddress />} />
        <Route path="pick-up" element={<PickUp />} />
        <Route path="order/:orderNum" element={<OrderDetails />} />
        <Route path="profile/edit" element={<EditProfile />} />
        <Route path="profile/recurring-pickups" element={<RecurringPickups />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Register />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="verify-account" element={<VerifyAccount />} />
      <Route path="/" element={<Onboarding />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default App
