import {loginAccount} from "../service/accountService";

export const login = (loginInfo) => {
    return async (dispatch) => {
        // xử lý nghiệp vụ trước khi dispatch
        const account = await loginAccount(loginInfo);
        console.log("-----------return account ---------" + account)
        if (account){
            console.log("-------------ok-----------")
            dispatch({
                type: 'LOGIN',
                payload: account,
            })
            return true;
        }else {
            console.log("-------------not ok-----------")
            return false;
        }

    }
};
export const logout = () => {
    return async (dispatch) => {
        // xử lý nghiệp vụ trước khi dispathc

        dispatch({
            type: 'LOGIN',
            payload: null,
        })
    }
};
