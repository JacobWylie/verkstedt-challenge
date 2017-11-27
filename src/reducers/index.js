import { combineReducers } from 'redux';
import RepositoriesReducer from './reducer_repositories';
import SavedReducer from './reducer_saved';

const rootReducer = combineReducers({
	repositories: RepositoriesReducer,
	saved: SavedReducer
});

export default rootReducer;
