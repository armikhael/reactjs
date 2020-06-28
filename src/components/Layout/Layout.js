/** @format */

import React from 'react'
import NavBar from '../NavBar/NavBar'

function Layout(props) {
	//const childrem = props.children;
	return (
		<React.Fragment>
			<NavBar />
			{props.children}
		</React.Fragment>
	)
}

export default Layout
