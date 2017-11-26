import axios from 'axios';
import moment from 'moment';
import _ from 'lodash';

export const FETCH_REPOSITORIES = 'fetch_repositories';
export const SAVE_REPOSITORY = 'save_respository';
export const FETCH_SAVED = 'fetch_saved';
export const UNSAVE_REPOSITORY = 'unsave_repository';
export const SEARCH_REPOSITORIES = 'search_repositories';

// The date one week ago
const date = moment().subtract(7,'days').format('YYYY-MM-DD');
// example of Url with last weeks results with keyword javascript
// 'https://api.github.com/search/repositories?sort=stars&order=desc&q=created:%3E2017-11-17+javascript'
const ROOT_URL = `https://api.github.com/search/repositories?sort=stars&order=desc&q=created:%3E${date}&`;

// Get repositories from Github API and return payload from the action
export function fetchRepositories() {
	const request = axios.get(ROOT_URL);
	
	return {
		type: FETCH_REPOSITORIES,
		payload: request
	}
}

// Save repository to users localstroge onClick
export function saveRepository(repository) {
	// localStorage only saves strings so object is turned into string and parsed back to JSON when retrieved
	const request = localStorage.setItem(repository.id, JSON.stringify(repository));
	return {
		type: SAVE_REPOSITORY,
		payload: request
	}
}

// Return saved repositories
export function fetchSaved() {
	const savedRepositories = {}
	const saved = Object.keys(localStorage).forEach(key => {
		savedRepositories[key] = JSON.parse(localStorage.getItem(key))
	})
	const request = savedRepositories;

	return {
		type: FETCH_SAVED,
		payload: request
	}
}

export function unsaveRepository(repository) {
	localStorage.removeItem(repository.id);
	const request = repository.id; 

	return {
		type: UNSAVE_REPOSITORY,
		payload: request
	}
}



























