import React, { Component } from 'react'

class Gallery extends Component {
	constructor ({initialPhoto}) {
  		super();
  		this.state = {photo: initialPhoto}
	}
	onPhotoChanged(newPhoto){
		this.setState({ photo: newPhoto});
		this.props.callbackParent(newPhoto);
	}
	render(){
		const car = this.props.car;
		return (
			<div className='gallery'>
				<div className="container">
                    <img src={car.photos[0]} onClick={()=> this.onPhotoChanged(car.photos[0])} />
                    <img src={car.photos[1]} onClick={()=> this.onPhotoChanged(car.photos[1])} />
                    <img src={car.photos[2]} onClick={()=> this.onPhotoChanged(car.photos[2])} />
                    <img src={car.photos[3]} onClick={()=> this.onPhotoChanged(car.photos[3])} />
                    <img src={car.photos[4]} onClick={()=> this.onPhotoChanged(car.photos[4])} />
                    <img src={car.photos[5]} onClick={()=> this.onPhotoChanged(car.photos[5])} />
				</div>
       		</div>
		)
	}
}

export default Gallery