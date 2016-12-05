import React, { Component } from 'react'
import cars from '../stores/cars';

class Block extends Component {
	
	render(){
		const car = cars[0];
		return (
			<div className='block'>
			<table>
				<tbody>
					<tr>
		   				<th><h4>{this.props.title}</h4></th>
		   			</tr>
				  	<tr>
				    	<td><h4>Cylinders</h4></td>
				    	<td><h4 className='detail-data'>{car.cylinders}</h4></td>
				 	</tr>
					<tr>
					    <td><h4>City MPG</h4></td>
					    <td><h4 className='detail-data'>{car.city_mpg} MPG</h4></td>
					</tr>
					<tr>
					    <td><h4>Highway MPG</h4></td>
					    <td><h4 className='detail-data'>{car.highway_mpg} MPG</h4></td>
					</tr>
					<tr>
					    <td className="td-lastchild"><h4>Engine</h4></td>
					    <td className="td-lastchild"><h4 className='detail-data'>{car.engine}</h4></td>
					</tr>
				</tbody>
			</table>
			</div>
		)
	}
}

export default Block