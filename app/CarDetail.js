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
	  this.setState({phot: photo.data})
	}
	componentDidMount(){
		var fetchData = axios.get('http://localhost:3000/cars/#1395P')
			.then(response =>	{
				this.setState({car: response.data});
		})
	}
	render(){
		return (
			<div>  
				<Navbar />
				<MediaQuery query='(min-width: 1024px)'> 
					<div className="wrapper">
						<img className='photo' src='/public/img/0.jpg'/>
						<Descriptions car={this.state.car}/>
					</div>
					<Gallery handleResponse={this.handleResponse} car={this.state.car} />
					<div className="wrap-block">
						<Block title={'EXTERIOR'} car={this.state.car}/>
						<Block title={'PERFORMANCE' car={this.state.car}}/>
					</div>
				</MediaQuery>
				<MediaQuery query='(max-width: 1023px)'>
				<div className="container-phone">
					<Slider car={this.state.car}/>
					<PhoneDescriptions car={this.state.car}/>
				</div>
				<div className="call">CALL US</div>
				<div className="phone-blocks">
					<Block title={'EXTERIOR'} car={this.state.car}/>
					<Block title={'PERFORMANCE'} car={this.state.car}/>
				</div>
				</MediaQuery>
			</div>
		)
	}
}

ReactDOM.render(<CarDetail />, document.getElementById('car-detail'))