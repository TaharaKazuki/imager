import type { NextPage } from 'next'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
