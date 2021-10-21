import React from 'react'
import close from '../../img/icon-close.svg'
import './SideMenuComponent.scss'

function SideMenuComponent(props){

    const onClickSideMenuClose = ()=>{
        props.setSideMenu(prevState=> !prevState)
    }

    return(
        <div className="menu">

            <div className="menu-container">
                <div className="menu-container-close">
                    <img 
                        src={close} 
                        alt="Close"
                        onClick={onClickSideMenuClose}
                    />
                </div>
                <div className="menu-container-list">
                    <ul>
                        <li><a href="#">Collections</a></li>
                        <li><a href="#">Men</a></li>
                        <li><a href="#">Women</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export { SideMenuComponent }