import React, {useEffect} from "react";
import {useParams} from "react-router-dom";

function DetailComponent() {

    const {id} = useParams();
    useEffect(()=>{
        console.log(id)
    })
    return (
        <>
            <h3>Detail</h3>
            <span>ID: </span>
            <span>1</span><br/>
            <span>Name: </span>
            <span>Chánh</span>
        </>
    );

};
export default DetailComponent ;
