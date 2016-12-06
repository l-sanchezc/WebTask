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
	/*
	The contructor is called before CarDetail is mounter, we call super(props) in order
	to do not have this.props undefined in the constructor
	*/
	constructor(props) {
    	super(props)
    	/*
		state will have: 	-'car' that we want to show from the database
							-'photo' that was selected by the user (by default 
							is the first photo which appears in the field 'photos'
							of the document)
		*/
    	this.state = { car: {}, photo:''}
	}
	/*
	componentDidMount() is invoked inmediately after CarDetail is mounted.
	we assign the car in JSON format that we get from our service REST to state car (using axios(ajax))
	we assign the array of photos to state photo
	*/
	componentDidMount(){
		var fetchData = axios.get('http://localhost:3000/cars/#1395P')
			.then(response =>	{
				this.setState({car: response.data[0]});
				this.setState({photo: this.state.car.photos[0]});
		})
	}
	/*
	_handleClick(newPhoto) receives the path of the main photo that the web should display
	It updates the state photo
	*/
	_handleClick(newPhoto){
		this.setState({photo: newPhoto});
	}
	/*
	The components are render if the ajax is completed (state car with 16 fields)
	*/
	render(){
		if (Object.keys(this.state.car).length >15){
			return (
				<div>  
					<Navbar />
					{/* 
						We use the module react-responsive to give different views depending on the window.
						We could also use min-devide-width, if we would like to addapt the view depending on the device.
						 */}
					<MediaQuery query='(min-width: 1024px)'> 
						<div className="wrapper">
							<img className='photo' src={this.state.photo}/>
							<Descriptions car={this.state.car}/>
						</div>
						{/*
							It sends to the child state car & photo and it will get back the
							photo selected by the user and call _handleClick to update the main photo
						*/}	
						<Gallery car={this.state.car} initialPhoto={this.state.photo} callbackParent={(newPhoto) => this._handleClick(newPhoto)}/>
						<div className="wrap-block">
						{/*	We have an "universal" block because the blocks that appear on the bootom share all the parameters except the title */}
							<Block title={'EXTERIOR'} car={this.state.car}/>
							<Block title={'PERFORMANCE'} car={this.state.car}/>
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
		} else {
			return null;
		}
	}
}
/*
Rendering into the DOM
*/
ReactDOM.render(<CarDetail />, document.getElementById('car-detail'))