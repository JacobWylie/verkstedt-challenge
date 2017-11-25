import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {
	render() {
		return (
			<div className="heading">
				<h1>Your Saved Repositories</h1>
				<h4><Link to={'/'}>Back to Trending</Link></h4>
			</div>
		);
	}
}