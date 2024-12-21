import React from "react";
import {Outlet} from "react-router-dom"
function HomeComponent() {
 return (
     <>
         <Outlet/>
      <h1>Đây là trang home</h1>
     </>
 );
}
export default HomeComponent ;