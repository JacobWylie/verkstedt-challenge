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
					<div className="rep-url">
						<a href={repository.html_url}>
							{repository.owner.login} / <span className="rep-name">{repository.name}</span>
						</a>
					</div>
					<div className="rep-desc">
						{repository.description}
					</div>
					<div>
						<span className="rep-lang">{repository.language}</span>
						<span className="rep-star">&#9733; {repository.stargazers_count}</span>
						<span className="rep-fork">&#9739; {repository.forks_count}</span>
						<span className="rep-save">Save Repository</span>
					</div>
					<hr/>
				</li>
				
			)
		})
	}

	render() {
		// Makes component wait for axios to finish before trying to render to page
		// Waits until Object is no longer empty
		if (Object.keys(this.props.repositories).length < 1) {
			return (
				<div className="main">
					<div className="loader"></div>
					<div><p>Loading...</p></div>
				</div>
			)
		}

		const today = moment().format('MMMM Do YYYY');
		const weekAgo = moment().subtract(7,'days').format('MMMM Do YYYY');
		return (
			<div>
				<div className="heading">
					<h1>Trending Repositories Created in the Last Week on Github</h1>
					<h2>Week of {weekAgo} - {today}</h2>
					<h4><Link to={'/saved'}>See Your Saved Repositories</Link></h4>
				</div>
				<div className="main">
					<ul>
						{this.renderRepositories()}
					</ul>
				</div>
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























