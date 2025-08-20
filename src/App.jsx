import { Outlet } from 'react-router-dom'
import './App.css'
import NavItems from './components/navitems.jsx'
import Footer from './components/Footer.jsx'
//import './assets/css/style.min.css';
function App() {
  
  return (
    <>
    <NavItems />
    <Outlet />
    <Footer/>
    </>
  )
}

export default App
