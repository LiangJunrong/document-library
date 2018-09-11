import { combineReducers } from 'redux';
import headerReducer from '../common/header/store/reducer';

export default combineReducers({
    header: headerReducer
})