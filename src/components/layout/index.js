import React, { Fragment } from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Fragment>
      <Header/>
      <main className='container'>
        <Outlet/>
      </main>
      <Footer/>
    </Fragment>
  )
}

export default Layout