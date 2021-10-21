import React from 'react'
import mini from '../../img/image-product-1-thumbnail.jpg'
import trash from '../../img/icon-delete.svg'
import './ShoppingCartComponent.scss'

function ShoppingCartComponent(){
    return (
        <div className="cart-container">
            <div className="cart-container-top">
                <p>Cart</p>
            </div>
            <div className="cart-container-button">
                <div className="cart-container-button-info">
                    <div className="cart-container-button-info-img">
                        <img src={mini} alt="Img-sho" />
                    </div>
                    <div className="cart-container-button-info-description">
                        <p>Autum Limited Edition...</p>
                        <p>$215.00 x 3</p>
                        <p>$375.00</p>
                    </div>
                    <div className="cart-container-button-info-trash">
                        <img src={trash} alt="" />
                    </div>
                </div>
                <div className="cart-container-button-checkout">
                    <button>Checkout</button>
                </div>
            </div>
        </div>
    )
}


export { ShoppingCartComponent }