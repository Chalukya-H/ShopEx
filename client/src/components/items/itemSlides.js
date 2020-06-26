import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../../media/imageHeader/image1.jpg'
import image2 from '../../media/imageHeader/image2.jpg'
import image3 from '../../media/imageHeader/image3.jpg'
import image4 from '../../media/imageHeader/image4.jpg'
import image5 from '../../media/imageHeader/image5.jpg' 

function ItemSlides(props) {
    return(
        <Carousel interval = {2000} >
            <Carousel.Item>
                <img
                className="img-fluid w-100 "
                src = {image1}
                alt="First slide" style ={{height:'280px'}}
                />
            
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 "
                src= {image2}
                alt="Second slide" style ={{height:'280px' }}
                />

            </Carousel.Item>
            <Carousel.Item>
            <img
            className="d-block w-100 "
            src= {image3}
            alt="Third slide" style ={{height:'280px' }}
            />

        </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 "
                src= {image4}
                alt="Fourth slide" style ={{height:'280px' }}
                />

            </Carousel.Item>
            <Carousel.Item>
            <img
            className="d-block w-100 "
            src= {image5}
            alt="Fifth slide" style ={{height:'280px' }}
            />

        </Carousel.Item>
        
        </Carousel>
       
    )
}

export default ItemSlides