import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MediaQuery from 'react-responsive'
import axios from 'axios'
import Navbar from './components/Navbar'
import Descriptions from './components/Descriptions'
import PhoneDescriptions from './components/PhoneDescriptions'
import Slider from './components/Slider'
import Gallery from './components/Gallery'
import Block from './components/Block'

class CarDetail extends Component {
	handleResponse(photo) {
	  console.log(photo)
	  //photo that has to appear when the user click on one image of the gallery
	}
	componentDidMount(){
		var fetchData = axios.get('http://localhost:3000/cars/#1395P')
			.then(function (response)	{
				console.log(response.data)
				//response.data has the car object
		})
	}

						/*
						default should be car.photos[0] from the car that we got from axios
						*/
	render(){
		return (
			<div>  
				<Navbar />
				<MediaQuery query='(min-width: 1024px)'> 
					<div className="wrapper">
						<img className='photo' src='/public/img/0.jpg'/>
						<Descriptions />
					</div>
					<Gallery handleResponse={this.handleResponse} car={this.props.car} />
					<div className="wrap-block">
						<Block title={'EXTERIOR'}/>
						<Block title={'PERFORMANCE'}/>
					</div>
				</MediaQuery>
				<MediaQuery query='(max-width: 1023px)'>
				<div className="container-phone">
					<Slider />
					<PhoneDescriptions />
				</div>
				<div className="call">CALL US</div>
				<div className="phone-blocks">
					<Block title={'EXTERIOR'}/>
					<Block title={'PERFORMANCE'}/>
				</div>
				</MediaQuery>
			</div>
		)
	}
}

ReactDOM.render(<CarDetail />, document.getElementById('car-detail'))