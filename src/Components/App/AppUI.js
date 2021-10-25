 import React from 'react'
 import { Context } from './context'
 import {HeaderComponent} from '../Header/HeaderComponent'
 import {InfoComponent} from '../Info/InfoComponent'
 import {TopImgComponent} from '../TopImg/TopImgComponent'
 import {ShoppingCartComponent} from '../ShoopingCar/ShoppingCartComponent'
 import { SideMenuComponent } from '../SideMenu/SideMenuComponent'
 import { CarouselComponent } from '../Carousel/CarouselComponent'
import './App.scss'

 function AppUI(){
     const {openCart,
     setOpenCart,
     openSideMenu,
     setSideMenu,
     openCarousel,
     setCarousel,
     changeAmount,
    setChangeAmount,
    } = React.useContext(Context)
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
                <TopImgComponent
                    setCarousel={setCarousel}
                />
                <InfoComponent 
                    setChangeAmount={setChangeAmount}
                    changeAmount={changeAmount}
                    
                />
                {openCarousel && (
                    <CarouselComponent
                        setCarousel={setCarousel}
                    />
                    )
                }
                
             </div>
         </React.Fragment>
     )
 }

 export { AppUI }