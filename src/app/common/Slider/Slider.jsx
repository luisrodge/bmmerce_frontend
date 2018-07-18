import React from 'react';
import Carousel from 'nuka-carousel';

// Temp Fix height issue
const _handleLoadImage = () => {
    this.carousel.setDimensions();
}

const Slider = (props) => {
    return (
        <Carousel
            ref={c => this.carousel = c}
        >
            {props.images.map((image, index) => {
                return <img src={image['listing_image']['url']} alt="Slide" key={index} onLoad={_handleLoadImage} />
            })}
        </Carousel>
    );
}


export default Slider;
