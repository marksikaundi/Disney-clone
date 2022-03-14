import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

function ImageSlider() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    }

  return (
    <Corousel {...settings}>
        <Wrap>
            <img src="/images/slider-badging.jpg" alt="" />
        </Wrap>

    </Corousel>
  )
}

export default ImageSlider


const Corousel = styled(Slider)`

`

const Wrap = styled.div`

`
