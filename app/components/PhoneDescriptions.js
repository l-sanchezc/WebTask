import React, { Component } from 'react'
import {Glyphicon} from "react-bootstrap"
import cars from '../stores/cars';

class PhoneDescriptions extends Component {
	render(){
		const car = cars[0];
		return (
			<div className="wrapper">
				<div className='description-left'>
					<h4 className='car-model'>{car.car_model}</h4>
					<h4 className='field'>Year</h4>
					<h4 className='data'>{car.year}</h4>
					<h4 className='field'>Price Range</h4>
					<h4 className='data'>{car.price}</h4>
					<h4 className='field'>Mileage</h4>
					<h4 className='data'>{car.mileage} miles</h4>
				</div>
				<div className='description-right'>
					<h4 className='field'>Item Number: {car.item_number}</h4>
					<h4 className='field'>VIN: {car.vin}</h4>
					<h4 className='remarked'>Share this car <Glyphicon glyph="envelope" /></h4>
					<h4 className='field'>Views</h4>
					<h4 className='stats-data'>{car.views}</h4>			
				</div>
			</div>
		)
	}
}

export default PhoneDescriptions