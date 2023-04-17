import React, { useState } from 'react'
import Navbar from './Navbar'
import '../assets/css/main.css'
import Sidebar from './Sidebar'
import Footer from './Footer'
import pages from '../constants/pages'
const Layout = ({ location, children }) => {
  console.log(location.pathname)
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  if (pages.includes(location.pathname)) {
    return (
      <>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        {children}
        <Footer></Footer>
      </>
    )
  } else return <>{children}</>
}

export default Layout
