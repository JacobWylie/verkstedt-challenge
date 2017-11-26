import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchSaved } from '../actions';

class Saved extends Component {

	componentDidMount() {
		this.props.fetchSaved();
		console.log(this.props)
	}

	renderSaved() {
	}

	render() {
		return (
			<div className="heading">
				<h1>Your Saved Repositories</h1>
				<h4><Link to={'/'}>Back to Trending</Link></h4>
			</div>
		);
	}
}

// To consume from application lecel state
function mapStateToProps(state) {
	return { repositories: state.repositories }
}

// Wire up action creeator so it's available to component
export default connect(mapStateToProps, { fetchSaved })(Saved);





