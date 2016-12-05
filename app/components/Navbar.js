import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import {Glyphicon} from "react-bootstrap"

class Navbar extends Component {

	render(){

		return (
		<div className="navBar">
			<MediaQuery query='(min-width: 1024px)'>   
				<ul>
         			<li><a href="#"><span><Glyphicon glyph="time" /></span></a></li>
          			<li><a href="#"><span><Glyphicon glyph="earphone" /></span></a></li>
          			<li><a href="#"><span><Glyphicon glyph="map-marker" /></span></a></li>
          			<li><a href="#"><span><Glyphicon glyph="search" /></span></a></li>
        		</ul>
			</MediaQuery>
			<MediaQuery query='(max-width: 1023px)'>
				<ul>
					<li><a href="#"><span><Glyphicon glyph="earphone" /></span></a></li>
          			<li><a href="#"><span><Glyphicon glyph="map-marker" /></span></a></li>
        		</ul>
			</MediaQuery>
        </div>
		)
	}
}

export default Navbar