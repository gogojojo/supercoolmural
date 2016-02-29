import React from 'react';
import Guy from './Guy.jsx';

class MainSvg extends React.Component {
	constructor(){
		super()
	}

	render(){
		return (
				<svg version="1.1" x="0px" y="0px" width="1280px" height="800px" viewBox="0 0 1280 800" enable-background="new 0 0 1280 800" >	
					<Guy />
				</svg>
		)
	}
}

export default MainSvg;