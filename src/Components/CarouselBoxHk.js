import React, {Component} from 'react';
import MushroomsImg from '../assets/83b001d629f121eea6797b62cdcb4c68.jpeg';
import OceanImg from '../assets/Download_page_icon_pillars.jpeg';
import {Carousel} from "react-bootstrap";

class CarouselBoxHk extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={OceanImg}
            alt="Ocean"/>
          <Carousel.Caption>
            <h3>Ocean image</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, est?</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={MushroomsImg}
            alt="Mushrooms"/>
          <Carousel.Caption>
            <h3>Mushrooms image</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, est?</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default CarouselBoxHk;
