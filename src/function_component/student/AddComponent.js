import React, {useEffect, useRef, useState} from "react";
import {addNew, getAll} from "../../service/studentService";
import useForm from "../../hook/userForm";
import {useNavigate} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {getAllClass} from "../../service/classService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddComponent() {
    const navigate = useNavigate()
    const [classList, setClassList] = useState([]);
    const [student, setStudent] = useState({id: "", name: "",gender : "Female",subject: [], class:""})
    const handleSubmit =  (value) => {

       const student ={
            ...value,
            class: JSON.parse(value.class)
        }
        console.log(student)
         addNew(student).then(()=>{
             console.log("-------thêm mới thành công-----------")
             toast.success("Thêm mới thành công")
             navigate('/students')
         });

    }
    useEffect(()=>{
        const fetchData =  async ()=>{
            let list = await getAllClass();
            setClassList(list);
        }
        fetchData();
    })
    const handleValidate = Yup.object({
        // id: Yup.string().required("yêu cầu nhập id"),
        name: Yup.string().required("Yêu cầu nhập tên"),
        gender: Yup.string().required("Yêu cầu nhập tên"),
        subject:Yup.array().required("yêu cầu nhập").min(1,"Yêu cầu chọn ít nhất 1 môn"),
        class:Yup.string().required("Yêu cầu chọn")
    })
    return (
        <>
            <Formik initialValues={student} onSubmit={handleSubmit} validationSchema={handleValidate}>
                <Form>
                    {/*<div>*/}
                    {/*    <label>ID</label>*/}
                    {/*    <Field type="text" name={'id'} placeholder={'ID'}/>*/}
                    {/*    <ErrorMessage name ='id' style ={{color:'red'}} component ='div' className ='error'/>*/}
                    {/*</div>*/}
                    <div>
                        <label>Name</label>
                        <Field type="text" name={'name'} placeholder={'Name'}/>
                        <ErrorMessage name ='name' style ={{color:'red'}} component ='div' className ='error'/>
                    </div>
                    <div>
                        <label>Gender</label>
                        <Field  type="radio" name={'gender'} value ={'Male'}/>Male
                        <Field  type="radio" name={'gender'} value ={'Female'}/>Female
                        <ErrorMessage name ='gender'style ={{color:'red'}}  component ='div' className ='error'/>
                    </div>

                    <div>
                        <label>Subject</label>
                        <Field  type="checkbox" name={'subject'} value ={'Java'}/>Java
                        <Field  type="checkbox" name={'subject'} value ={'JS'}/> JS
                        <Field  type="checkbox" name={'subject'} value ={'PHP'}/>PHP
                        <ErrorMessage name ='subject' style ={{color:'red'}}  component ='div' className ='error'/>
                    </div>
                    <div>
                        <label>Class</label>
                        <Field  as="select" name={'class'}>
                          <option>--------Select--------</option>
                            {classList.map(e=>(
                                <option key={e.id} value={JSON.stringify(e)}>{e.name}</option>
                            ))}
                        </Field>
                        <ErrorMessage name ='class' style ={{color:'red'}} component ='div' className ='error'/>
                    </div>
                    <div>
                        <button type={'submit'}>Save</button>
                    </div>
                </Form>
            </Formik>
        </>
    )

}

export default AddComponent;