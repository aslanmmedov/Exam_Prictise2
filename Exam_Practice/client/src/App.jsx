
import './App.css'
import { Route, Routes } from 'react-router-dom'
import ClientLayout from './ClientLayout'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Add from './pages/Add'
import Detail from './pages/Detail'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<ClientLayout/>}>
            <Route index element = {<Home/>}/>
            <Route path = "wishlist" element = {<Wishlist/>}/>
            <Route path = "/:id" element = {<Detail/>}/>
            <Route path = "add" element = {<Add/>}/>
        </Route>
        <Route path = "*" element = {<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
