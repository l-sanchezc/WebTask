'use strict';

import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Carousel } from 'react-responsive-carousel';

class Slider extends Component {
	render() {
		cconst car = {this.props.car};
        return (
            <Carousel showThumbs={false} showArrows={false} showStatus={false}>
                <div>
                    <img src={car.photos[0]}/>
                </div>
                <div>
                    <img src={car.photos[1]}/>
                </div>
                <div>
                    <img src={car.photos[2]}/>
                </div>
                <div>
                    <img src={car.photos[3]}/>
                </div>
                <div>
                    <img src={car.photos[4]}/>
                </div>
                <div>
                    <img src={car.photos[5]}/>
                </div>
            </Carousel>
        );
    }
}

export default Slider