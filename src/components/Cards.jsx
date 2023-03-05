import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <>
        <div className="cards">
            <h1> KEY SECTORS</h1>
            <h4>Kebbi offers a wide range of opportunities to private sector investors</h4>
            <div className="cards_container">
                <div className="cards_wrapper">

                    <ul className="cards_items">
                        <CardItem 
                            src="../assets/images/bg.jpg"
                            text="Features a flexible, multi-directional sole and a supportive upper made from synthetic materials."
                            label="The Flexxor"
                            path="/services"
                        />
                        <CardItem 
                            src="../assets/images/bg.jpg"
                            text="Introducing our latest running shoe, the 'Grit Runner!'"
                            label="The Grit Runner"
                            path="/services"
                        />
                        <CardItem 
                            src="../assets/images/bg.jpg"
                            text="Introducing our latest running shoe, the 'Grit Runner!'"
                            label="The Grit Runner"
                            path="/services"
                        />
                    </ul>

                    <ul className="cards_items">
                        <CardItem 
                            src="../assets/images/bg.jpg"
                            text="Sleek and simple shoe that prioritizes comfort and functionality."
                            label="The Minimalist"
                            path="/services"
                        />
                        <CardItem 
                            src="../assets/images/bg.jpg"
                            text="Hiking sneaker designed for off-road adventures."
                            label="The Trailblazer"
                            path="/products"
                        />
                         <CardItem 
                            src="../assets/images/bg.jpg"
                            text="A casual shoe designed for comfortable everyday wear."
                            label="The Relaxer"
                            path="/sign-up"
                        />
                    </ul>  
                </div>
            </div>
        </div>
    </>
  )
}

export default Cards