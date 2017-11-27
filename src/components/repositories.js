import React, { Component } from 'react';
// Connects to reducers to pass data
import { connect } from 'react-redux'
// Allows navigation between pages in app without http request
import { Link } from 'react-router-dom';
import moment from 'moment';
import _ from 'lodash';
// Action creators
import { fetchRepositories, saveRepository } from '../actions';
import SearchBar from './search';

class Repositories extends Component {
	// AJAX request when component is rendered
	componentDidMount() {
		this.props.fetchRepositories();
	}

	constructor() {
    	super();
	}

	// Render repositories to page
	renderRepositories() {
		// Repositories are now an object (not array) and require lodash _.map()
		return _.map(this.props.repositories, repository => {
			// Check to see if repository has been saved and change button
			!localStorage.hasOwnProperty(repository.id) ? 
				this.state = {save: 'Save Repository', bgColor: 'save'} :
				this.state = {save: 'Saved', bgColor: 'saved'}
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
						{repository.language ? <span className="rep-lang">{repository.language}</span> : ""}
						<span className="rep-star"><span className="star">&#9733;</span> {repository.stargazers_count}</span>
						<span className="rep-fork"><span className="fork">&#9739;</span> {repository.forks_count}</span>
						<span onClick={this.onSave.bind(this, repository)} className={`rep-save ${this.state.bgColor}`}>{this.state.save}</span>
					</div>
					<hr/>
				</li>
				
			)
		})
	}

	// Save a repository to localstorage. Id is passed to even handler and 'this' context maintained
	onSave(repository) {
		this.props.saveRepository(repository)
		this.setState({ save: "Saved", bgColor: "saved" })
	}

	render() {
		// Makes component wait for axios to finish before trying to render to page
		// Waits until Object is no longer empty
		if (Object.keys(this.props.repositories).length < 1) {
			return (
				<div className="main">
					<div className="loader-container">
					<div className="loader"></div>
					<div><p>Loading...</p></div>
					</div>
				</div>
			)
		}

		const today = moment().format('MM/DD/YYYY');
		const weekAgo = moment().subtract(7,'days').format('MM/DD/YYYY');
		return (
			<div>
				<div className="heading">
					<img src="/img/github.pn"/>
					<h1>Trending Repositories Created in the Last Week</h1>
					<h2>{weekAgo} - {today}</h2>
					<h4><Link to={'/saved'}>View Your Saved Repositories</Link></h4>
				</div>
				<div className="main">
					{/*<SearchBar />*/}
					<ul>
						{this.renderRepositories()}
					</ul>
				</div>
			</div>
			
		)
	}
}

// To consume from application lecel state
function mapStateToProps(state) {
	return { repositories: state.repositories }
}

// Wire up action creeator so it's available to component
export default connect(mapStateToProps, { fetchRepositories, saveRepository })(Repositories);























