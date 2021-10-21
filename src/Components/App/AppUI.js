 import React from 'react'
 import { Context } from './context'
 import {HeaderComponent} from '../Header/HeaderComponent'
 import {InfoComponent} from '../Info/InfoComponent'
 import {TopImgComponent} from '../TopImg/TopImgComponent'
 import {ShoppingCartComponent} from '../ShoopingCar/ShoppingCartComponent'
 import { SideMenuComponent } from '../SideMenu/SideMenuComponent'
import './App.scss'

 function AppUI(){
     const {openCart,
     setOpenCart,
     openSideMenu,
     setSideMenu,
     openCarousel,
     setCarousel} = React.useContext(Context)
     return (
         <React.Fragment>
             <div className="container">
                <HeaderComponent 
                    setOpenCart={setOpenCart}
                    setSideMenu={setSideMenu}
                />
                {openCart && (
                    <ShoppingCartComponent />
                    )
                }
                {openSideMenu && (
                    <SideMenuComponent 
                        setSideMenu={setSideMenu}    
                    />
                    )
                }
                <TopImgComponent />
                <InfoComponent />
             </div>
         </React.Fragment>
     )
 }

 export { AppUI }