import React from 'react';

const Header = (props) => {
	return (
			<header className="top">
				<h1>Catch 
				<span className="ofThe">
				<span className="of">of</span>
				<span class="the">the</span>
				</span>
				Day</h1>
				<h3 className="tagline">{props.tagline}</h3>
			</header>
		)
	}

	

export default Header;