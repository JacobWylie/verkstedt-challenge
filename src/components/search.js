import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: ''};
	}

	render() {
		return (
			<div className="search-bar">
				<input
					placeholder="Type Here"
					value = {this.state.term} 
					onChange={event => this.onInputChange(event.target.value)} 
				/>
			</div>
		);
	}

	onInputChange(term) {
		this.props.fetchRepositories(term);
	}

}

export default SearchBar;






