import axios from 'axios';
import moment from 'moment';

export const FETCH_REPOSITORIES = 'fetch_repositories';
// The date one week ago
export const date = moment().subtract(7,'days').format('YYYY-MM-DD');
export const today = moment().format('YYYY-MM-DD');
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