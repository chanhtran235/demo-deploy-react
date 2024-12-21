import {combineReducers} from "redux";

const userReducer = (state = {account:null}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                account: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                account: action.payload,
            };
        default:
            return state;
    }
};

// Kết hợp tất cả reducers thành một rootReducer
export const rootReducer = combineReducers({
    user: userReducer,
});