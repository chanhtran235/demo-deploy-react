
import {applyMiddleware, createStore} from 'redux';
import {rootReducer} from './reducers';
import {thunk} from 'redux-thunk'

// Tạo Redux store và cung cấp rootReducer
const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;