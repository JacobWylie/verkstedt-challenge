import React, { Component } from 'react';
// Connects to reducers to pass data
import { connect } from 'react-redux'
// Allows navigation between pages in app without http request
import { Link } from 'react-router-dom';
import moment from 'moment';
import _ from 'lodash';
// Action creator that GETs repositories
import { fetchRepositories } from '../actions';

class Repositories extends Component {
	// AJAX request when component is rendered
	componentDidMount() {
		this.props.fetchRepositories();
	}

	// Helper function to render repositories to page
	renderRepositories() {
		// Repositories are now an object (not array) and require lodash _.map()
		return _.map(this.props.repositories, repository => {
			return (
				<li className="" key={repository.id}>
					<div>
						<a href={repository.html_url}>
							{repository.owner.login} / {repository.name}
						</a>
					</div>
					<div>
						{repository.description}
					</div>
					<div>
						<span>Language: {repository.language}</span>
						<span>{repository.stargazers_count}</span>
						<span>{repository.forks_count}</span>
					</div>
				</li>
			)
		})
	}

	render() {
		// Makes component wait for axios to finish before trying to render to page
		// Waits until Object is no longer empty
		if (Object.keys(this.props.repositories).length < 1) {
			return <div>Loading...</div>
		}

		const today = moment().format('MMMM Do YYYY');
		const weekAgo = moment().subtract(7,'days').format('MMMM Do YYYY');
		return (
			<div>Trending Repositories Created in the Last Week on Github
				<div>Week of {weekAgo} - {today}</div>
				{this.renderRepositories()}
			</div>
			
		);
	}
}

// To consume from application lecel state
function mapStateToProps(state) {
	return { repositories: state.repositories }
}

// Wire up action creeator so it's available to component
export default connect(mapStateToProps, { fetchRepositories })(Repositories);























