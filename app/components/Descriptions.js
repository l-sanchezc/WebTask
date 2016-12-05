import React, { Component } from 'react'
import {Glyphicon} from "react-bootstrap"
import 	numbro from "numbro"
import cars from '../stores/cars';

class Descriptions extends Component {
	render(){
		const car = cars[0];
		var minPrice = car.min_price;
		minPrice = numbro(minPrice).formatCurrency('$0,0');
		var maxPrice = car.max_price;
		maxPrice = numbro(maxPrice).formatCurrency('$0,0');
		var mileage = car.mileage;
		mileage= numbro(mileage).format('0,0');
		//I use a fake object till I implement the REST Api
		return (
			<div className='description'>
				<h4 className='remarked'>{car.car_model}</h4>
				<h4 className='field'>Year</h4>
				<h4 className='data'>{car.year}</h4>
				<h4 className='field'>Price Range</h4>
				<h4 className='data'>{minPrice} - {maxPrice}</h4> 
				<h4 className='field'>Mileage</h4>
				<h4 className='data'>{mileage} miles</h4>
				<h4 className='field'>Item Number: {car.item_number}</h4>
				<h4 className='field'>VIN: {car.vin}</h4>
				<h4 className='remarked'>Share this car <Glyphicon glyph="envelope" /></h4>
				<div className='stats-wrapper'>
					<div className='stats'><h4>Views</h4>
						<h4 className='stats-data'><center>{car.views}</center></h4>
					</div>
					<div className='stats'><h4>Saves</h4>
						<h4 className='stats-data'><center>{car.saves}</center></h4>
					</div>
					<div className='stats'><h4>Shares</h4>
						<h4 className='stats-data'><center>{car.shares}</center></h4>
					</div>
				</div>
			</div>
		)
	}
}

export default Descriptions