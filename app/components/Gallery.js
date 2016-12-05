import React, { Component } from 'react'
import cars from '../stores/cars';

class Gallery extends Component {
	handlePhoto(){		
		this.props.handleResponse(photo)
	}
	render(){
		const car = cars[0];
		return (
			<div className='gallery'>
				<div className="container">
					<img src={car.photos[0]}/>
					<img src={car.photos[1]}/>
					<img src={car.photos[2]}/>
					<img src={car.photos[3]}/>
					<img src={car.photos[4]}/>
					<img src={car.photos[5]}/>
				</div>
       		</div>
		)
	}
}

export default Gallery