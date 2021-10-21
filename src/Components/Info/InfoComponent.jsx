import React from 'react'
import './InfoComponent.scss'

function InfoComponent (){
    return (
        <div className="info-container">
            <p>Sneaker</p>
            <h3>Fall Limited Edition Sneakers</h3>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstands everything the weather can offer.</p>
            <div className="info-container-price">
                <p>$125.00</p>
                <div className="info-container-price-item">
                    <p id="info-container-price-item-p">50%</p>
                </div>
                <p>$250.00</p>
            </div>
            <div className="info-container-amount">
                <button className="info-container-amount-button">-</button>
                <p>0</p>
                <button className="info-container-amount-button">+</button>
            </div>
            <div className="info-container-cart">
                <button>
                    icono Add to Cart
                </button>
            </div>
        </div>
    )
}


export { InfoComponent };