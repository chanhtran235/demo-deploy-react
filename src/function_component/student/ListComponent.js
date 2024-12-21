import React, {useCallback, useEffect, useRef, useState} from "react";
import {deleteById, getAll, searchByName} from "../../service/studentService";
import DeleteComponent from "./DeleteComponent";
import {Link, useNavigate} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {getAllClass} from "../../service/classService";

const ListComponent = () => {

    const [studentList, setStudentList] = useState([]);
    const [deleteStudent, setDeleteStudent] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [isShowModalReactBootstrap, setIsShowModalReactBootstrap] = useState(false);
    const searchRef = useRef();
    const navigate = useNavigate();
    useEffect(() => {
        // thực thi sau khi component render
        const  fetchData =  ()=>{
           getAll().then(data =>{
               console.log(data)
               setStudentList(data)
           });

        }
        fetchData();

    }, [isLoading, isShow]);

    const handleSearch = () => {
        searchByName(searchRef.current.value).then((data)=>{
            console.log("-----------search------------")
            console.log(data)
            setStudentList(data);
        })

    }
    const handleShowModal = (student) => {
        console.log("--------open------------")
        setDeleteStudent(() => student);
        setIsShow(pre => !pre)
    }

    const handleCloseModal = useCallback(() => {
        console.log("--------close------------")
        setIsShow(pre => !pre)
    }, [])

    const handleDetail = (id) => {
        navigate("/students/detail/" + id)
    }
    const handleShowModalReactBootstrap = (student) => {
        setDeleteStudent(() => ({
            ...student
        }));
        setIsShowModalReactBootstrap(pre => !pre);

    }
    const handleCloseModalReactBootstrap = () => {
        setIsShowModalReactBootstrap(pre => !pre);
    }
    const handleDeleteReactBootstrap = () => {
        console.log("-------delete--------------------")
        console.log(deleteStudent)
        deleteById(deleteStudent.id);
        console.log(getAll())
        setIsShowModalReactBootstrap(pre => !pre);
        setIsLoading(pre => !pre)
    }
    return (
        <>
            {/*{console.log("----render------------")}*/}
            <Link to={'/students/create'}>Add new student</Link>
            <form>
                <input ref={searchRef} placeholder={'enter name'}/>
                <button onClick={handleSearch} type={'button'}>Search</button>
            </form>

            <table className={'table table-dark'}>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Subject</th>
                    <th>Class</th>
                    <th>Detail</th>
                    <th>Delete</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {
                    (studentList.length == 0) ? <tr>
                        <td>isLoadingin</td>
                    </tr> : studentList.map((s, i) => (
                        <tr key={s.id}>
                            <td>{i + 1}</td>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.gender}</td>
                            <td>{s.subject}</td>
                            <td>{s.class.name}</td>
                            <td>
                                <button onClick={() => {
                                    handleDetail(s.id)
                                }}>Detail
                                </button>
                            </td>
                            <td>
                                <button onClick={
                                    () => {
                                        handleShowModal(s)
                                    }
                                }>Delete
                                </button>
                            </td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => {
                                    handleShowModalReactBootstrap(s)
                                }}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <DeleteComponent isShow={isShow} deleteStudent={deleteStudent} handleCloseModal={handleCloseModal}/>

            <Modal show={isShowModalReactBootstrap} onHide={handleCloseModalReactBootstrap}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có muốn xoá {deleteStudent.name} không?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModalReactBootstrap}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDeleteReactBootstrap}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}
export default ListComponent;