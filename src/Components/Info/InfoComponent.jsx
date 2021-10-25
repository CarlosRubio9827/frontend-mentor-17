import React from 'react'
import './InfoComponent.scss'
import  cart from '../../img/icon-cartWhite.svg';

function InfoComponent (props){

    const amountSub = ()=>{
        if(props.changeAmount > 0){
            props.setChangeAmount(
                prevCount => prevCount - 1
            )

        }
    }
        
        const amountAdd = ()=>{    
        props.setChangeAmount(
            prevCount => prevCount + 1
        )
    }
    

    return (
        <div className="info-container">
            <p className="info-container-subtitle">Sneaker Company</p>
            <h3 className="info-container-title">Fall Limited Edition Sneakers</h3>
            <p className="info-container-description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstands everything the weather can offer.</p>
            <div className="info-container-price">
                <p>$125.00</p>
                <div className="info-container-price-item">
                    <p id="info-container-price-item-p">50%</p>
                </div>
                <p>$250.00</p>
            </div>
            <div className="info-container-amount">
                <button
                    onClick={amountSub} className="info-container-amount-button">-</button>
                <p >{ props.changeAmount }</p>
                <button 
                    onClick={amountAdd}
                className="info-container-amount-button">+</button>
            </div>
            <div className="info-container-cart">
                <button>
                    <img src={ cart } alt="Shopping Cart" /> <p>Add to Cart</p>
                </button>
            </div>
        </div>
    )
}


export { InfoComponent };