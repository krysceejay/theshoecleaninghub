//import React from 'react'
import { Routes , Route } from 'react-router-dom'
import PrivateRoute from './routes/PrivateRoute'
import BottomTabs from './components/layouts/BottomTabs'
import Home from './pages/home/Home'
import Details from './pages/home/Details'
import Login from './pages/auth/Login'
import Onboarding from './pages/Onboarding'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Routes>
      <Route path="my" element={<PrivateRoute />}>
        <Route path="home" element={<BottomTabs />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="home/details/:number" element={<Details />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Onboarding />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default App
