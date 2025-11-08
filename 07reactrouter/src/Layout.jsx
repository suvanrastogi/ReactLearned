import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout(){
return(
    <>
    {/* here we are trying to import everything dynamically and hence we will use react router dom ,we get outlet , what it does it uses this layout
    as a base and whatever is in it up or down will be same , for example here Header and footer will remain same throughout bbut inside it the
     content will keep changing8, WE  HAVE TO TELL THE INDEX.HTML THAT WE ARE USING A LAYOUT AND SAB USKE ANDAR DERA HU
    */}
    <Header />
    <Outlet />
    <Footer />
    </>
)
}

export default Layout