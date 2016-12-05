import React, { Component } from 'react'

class Gallery extends Component {
	constructor (props) {
  		super(props);
	}
	handlePhoto(){		
		this.props.handleResponse(photo)
	}
	render(){
		const car = {this.props.car};
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