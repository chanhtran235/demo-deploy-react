
import './App.css';
import Header from "./class_components/Header";
import React from "react";
import Footer from "./class_components/Footer";
import ListComponent from "./function_component/student/ListComponent";
import {Routes, Route} from 'react-router-dom';
import HomeComponent from "./function_component/HomeComponent";
import AboutComponent from "./function_component/AboutComponent";
import AddComponent from "./function_component/student/AddComponent";
import DetailComponent from "./function_component/student/DetailComponent";
import { ToastContainer } from 'react-toastify';
import LoginComponent from "./function_component/acount/LoginComponent";

function App() {
    return (
        <>
           <ToastContainer/>
            <Header/>
            <Routes>
                <Route path={'/login'} element={<LoginComponent/>}/>
                <Route path={'/students'} element={<ListComponent/>}/>
                <Route path={'/students/create'} element={<AddComponent/>}/>
                <Route path={'/students/detail/:id'} element={<DetailComponent/>}/>
                <Route path={'/home'} element={<HomeComponent/>}>
                    <Route path={"about"} element={<AboutComponent/>}/>
                </Route>
            </Routes>

            <Footer/>
        </>

    );
}

export default App;
