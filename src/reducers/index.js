import { combineReducers } from 'redux';
import RepositoriesReducer from './reducer_repositories';

const rootReducer = combineReducers({
	repositories: RepositoriesReducer
});

export default rootReducer;
