import React, { Fragment } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Layout(props) {
  return (
    <Fragment>
        <Header />
        <main>{props.children}</main>
        <Footer />
    </Fragment>
  )
}

export default Layout