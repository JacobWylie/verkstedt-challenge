import { combineReducers } from 'redux';
import RepositoriesReducer from './reducer_repositories';
import SavedReducer from './saved_reducer';

const rootReducer = combineReducers({
	repositories: RepositoriesReducer,
	saved: SavedReducer
});

export default rootReducer;
