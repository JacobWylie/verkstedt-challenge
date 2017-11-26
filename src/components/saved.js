import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchSaved, unsaveRepository } from '../actions';

class Saved extends Component {

	componentDidMount() {
		this.props.fetchSaved();
	}

	renderSaved() {
		return _.map(this.props.saved, repository => {
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
						<span className="rep-star">&#9733; {repository.stargazers_count}</span>
						<span className="rep-fork">&#9739; {repository.forks_count}</span>
						<span onClick={this.unsave.bind(this, repository)} className="rep-save">Unsave</span>
					</div>
					<hr/>
				</li>
			)
		})
	}

	// Delete repository from localStorage
	unsave(repository) {
		this.props.unsaveRepository(repository);
	}

	

	render() {
		return (
			<div>
				<div className="heading">
					<Link to={'/'}><img src="/img/github.png"/></Link>
					<h1>Your Saved Repositories</h1>
					<h4><Link to={'/'}>Back to Trending</Link></h4>
				</div>
				<div className="main">
						<ul>
							{this.renderSaved()}
						</ul>
				</div>
			</div>
		);
	}
}

// To consume from application lecel state
function mapStateToProps(state) {
	return { saved: state.saved }
}

// Wire up action creeator so it's available to component
export default connect(mapStateToProps, { fetchSaved, unsaveRepository })(Saved);





