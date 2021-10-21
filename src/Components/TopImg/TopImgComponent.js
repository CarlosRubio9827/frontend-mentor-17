import React from 'react'
import  imageproduct1  from '../../img/imageproduct1.jpg';
import  imageproduct2  from '../../img/image-product-2.jpg';
import  imageproduct3  from '../../img/image-product-3.jpg';
import  imageproduct4  from '../../img/image-product-4.jpg';
import previous from '../../img/icon-previous.svg';
import next from '../../img/icon-next.svg';

import './TopImgComponent.scss'

function TopImgComponent(){
    const moveLeft = ()=>{
        const carousel = document.querySelector('.containerC-carousel');
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
        const carousel = document.querySelector('.containerC-carousel');
        const transform = carousel.style.transform
        let x = parseInt(transform.slice(11,14))
        if(x < 0){
            x+=25 
            carousel.style.transform = `translateX(${x}%)`;
        } else if(!x || x == 0){
            carousel.style.transform = `translateX(${-75}%)`;

        }
    }

    return (
        <div className="containerC">
            <div 
                className="containerC-arrow containerC-left"
                onClick={moveLeft}
            >
                <img src={previous} alt="previous" />
            </div>
            <div className="containerC-carousel">
                <div className="containerC-carousel-item">
                    <a href="#">
                        <img src={ imageproduct1 } alt="" />
                    </a>
                </div>
                <div className="containerC-carousel-item">
                    <a href="#">
                        <img src={ imageproduct2 } alt="" />
                    </a>
                </div>
                <div className="containerC-carousel-item">
                    <a href="#">
                        <img src={ imageproduct3 } alt="" />
                    </a>
                </div>
                <div className="containerC-carousel-item">
                    <a href="#">
                        <img src={ imageproduct4 } alt="" />
                    </a>
                </div>
            </div>
            <div 
                className="containerC-arrow containerC-right"
                onClick={moveRight}
            >
                <img src={next} alt="next" />
            </div>

        </div>
    )
}


export { TopImgComponent }