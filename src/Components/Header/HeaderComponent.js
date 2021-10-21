import React from 'react';
import './HeaderComponent.scss'
import logo from '../../img/logo.svg'
import hamburguer from '../../img/icon-menu.svg'

function HeaderComponent(props){

    const onClickCart = ()=>{
        props.setOpenCart(prevState=> !prevState)
    }

    const onClickSideMenu = ()=>{
        props.setSideMenu(prevState=> !prevState)
    }

    return (
        <header className="header">
            <div className="header-hamburguer">
                <img 
                    className="header-hamburguer-img" 
                    onClick={ onClickSideMenu }
                    src={hamburguer}/>

            </div>
            <div className="header-logo">
                <img className="header-logo-img" src={logo}/>
            </div>
            <ul className="header-list">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div 
                className="header-carShop"
                onClick={ onClickCart }    
            >
                <img className="header-carShop-img" />
            </div>
            <div className="header-profile">
                <img className="header-profile-img" />                    
            </div>
        </header>
    )
}

export {HeaderComponent}