import React from 'react'
import close from '../../img/icon-close.svg'
import imageproduct1 from '../../img/imageproduct1.jpg';
import imageproduct2 from '../../img/image-product-2.jpg';
import imageproduct3 from '../../img/image-product-3.jpg';
import imageproduct4 from '../../img/image-product-4.jpg';
import imageproduct01 from '../../img/image-product-1-thumbnail.jpg';
import imageproduct02 from '../../img/image-product-2-thumbnail.jpg';
import imageproduct03 from '../../img/image-product-3-thumbnail.jpg';
import imageproduct04 from '../../img/image-product-4-thumbnail.jpg';
import previous from '../../img/icon-previous.svg';
import next from '../../img/icon-next.svg';
import './CarouselComponent.scss';

function CarouselComponent(props){
    const closeCarousel =()=>{
        props.setCarousel(prevState=> !prevState)
    }
    const moveLeft = ()=>{
        const carousel = document.querySelector('.carouselC-container-content-container');
        const transform = carousel.style.transform
        let x = parseInt(transform.slice(11,14))
        if(!transform){
            carousel.style.transform = 'translateX(-25%)'
        }else if(x > -75){
            x+= -25 
            carousel.style.transform = `translateX(${x}%)`;
        }else if(x == -75){
            carousel.style.transform = `translateX(${0}%)`;
        }
    }
    
    const moveRight = ()=>{
        const carousel = document.querySelector('.carouselC-container-content-container');
        const transform = carousel.style.transform
        let x = parseInt(transform.slice(11,14))
        console.log(x)
        if(x < 0){
            x+=25 
            carousel.style.transform = `translateX(${x}%)`;
        } else if(!x || x == 0){
            carousel.style.transform = `translateX(${-75}%)`;

        }
    }

    const chageImg = (evt)=>{
        const x= evt.target.alt
        console.log(x)
        const carousel = document.querySelector('.carouselC-container-content-container')
        console.log(carousel.style.transform + " 1")
        carousel.style.transform = `translateX(-${x}%)`;
        console.log(carousel.style.transform + " 2")

    }

    return(
        <div className="carouselC">
            <div className="carouselC-container">
                <div className="carouselC-container-close">
                    <img onClick={closeCarousel} src={ close } alt="Close" />
                </div>
                <div className="carouselC-container-arrow carouselC-container-left">
                    <img onClick={moveLeft} src={ previous } alt="" />
                </div>
                <div className="carouselC-container-arrow carouselC-container-right">
                    <img onClick={moveRight}  src={ next } alt="" />
                </div>
                <div className="carouselC-container-content">
                    <div className="carouselC-container-content-container">
                        <div className="carouselC-container-content-container-img">
                            <img src={imageproduct1} alt="imageproduct1" />
                        </div>
                        <div className="carouselC-container-content-container-img">
                            <img src={imageproduct2} alt="imageproduct1" />
                        </div>
                        <div className="carouselC-container-content-container-img">
                            <img src={imageproduct3} alt="imageproduct1" />
                        </div>
                        <div className="carouselC-container-content-container-img">
                            <img src={imageproduct4} alt="imageproduct1" />
                        </div>
                    </div>
                    
                </div>
                <div className="carouselC-container-list">
                    <ul>
                        <li onClick={chageImg}>
                            <img src={imageproduct01} alt="00" />
                        </li>
                        <li onClick={chageImg}>
                            <img src={imageproduct02} alt="25" />
                        </li>
                        <li onClick={chageImg}>
                            <img src={imageproduct03} alt="50" />
                        </li>
                        <li onClick={chageImg}>
                            <img src={imageproduct04} alt="75" />
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}


export { CarouselComponent }