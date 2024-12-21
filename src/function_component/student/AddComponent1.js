
import React, {useRef, useState} from "react";
import {addNew, getAll} from "../../service/studentService";
import useForm from "../../hook/userForm";
import {useNavigate} from "react-router-dom";

function AddComponent() {
    const navigate = useNavigate()

    const [formValues, handleOnChange, resetFrom] = useForm({id:"",name:""});
    // const [student, setStudent] = useState({})
    //
    // const handleOnChange =(event)=>{
    //     console.log(event.target.name);
    //     console.log(event.target.value);
    //     setStudent(prevState => ({
    //         ...prevState,
    //         [event.target.name]: event.target.value
    //     }))
    // }

    const handleAdd =async ()=>{
        console.log(formValues)
        await addNew(formValues);
        resetFrom();
        console.log(getAll());
        navigate('/students')
    }

    return (
        <>
            {console.log("----add-render-----------")}
            <form>
                <input value={formValues.id}  onChange={handleOnChange} name={'id'} placeholder={'ID'}/>
                <input value={formValues.name} onChange={handleOnChange} name={'name'}  placeholder={'Name'}/>
                <button type={'button'} onClick={handleAdd}>Save</button>
            </form>
        </>
    )

}
export default AddComponent ;