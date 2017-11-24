import React, { Component } from 'react';
// Dates of last week until today
import { date, today } from '../actions';
// Action creator that GETs repositories

export default class Repositories extends Component {
	render() {
		return (
			<div>Trending Repositories on Github from Last Week
				<div>Week of {date} to {today}</div>
			</div>
			
		);
	}
}
