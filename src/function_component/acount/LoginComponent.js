
import React, {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginAccount} from "../../service/accountService";
import {login} from "../../redux/action";
import {useNavigate} from "react-router";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginComponent() {
    const accountLogin = useSelector((state)=>state.user.account);
    const navigate = useNavigate();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const dispatch = useDispatch();
    const  handleLogin= async ()=>{
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        const loginInfo = {
            username,
            password
        }
        let isSuccess =await dispatch(login(loginInfo))
        if (isSuccess){
            navigate("/home");
            toast.success("Đăng nhập thành công")
        }else {
            toast.error("Đăng nhập thất bại")
        }

        // const currentAccount = await loginAccount(account);
        // if (currentAccount!=null){
        //     console.log("----------login thành công ------------")
        //     dispatch(login(currentAccount));
        //     console.log(accountLogin)
        //     navigate("/students");
        // }else {
        //     console.log("-------login không thành công------------")
        // }
    }

    return (
        <>
            <form>
                <h3>Login {(accountLogin!=null)?(accountLogin.username):''}</h3>
                <div>
                    <label>Username</label>
                    <input ref={usernameRef} name={'username'}/>
                </div>
                <div>
                    <label>Password</label>
                    <input ref={passwordRef} name={'password'}/>
                </div>
                <button type={'button'} onClick={handleLogin}>Login</button>
            </form>
        </>
    )

}
export default LoginComponent ;