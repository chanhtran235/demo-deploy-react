import React from "react";
import DeleteComponent from "./DeleteComponent";
import {getAll} from "../../service/studentService";
import AddComponent from "./AddComponent";


class ListComponent extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            studentList: [],
            isShow: false,
            isLoadingData: false,
            deleteStudent: {
                id: "",
                name: "",
            }
        }
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleLoadingData= this.handleLoadingData.bind(this)
    }

    handleShowModal(student) {
        this.setState(pre => ({
            ...pre,
            isShow: !pre.isShow,
            deleteStudent:{
                ...student
            }
        }))
    }

    handleLoadingData() {
        this.setState(pre => (
            {
                ...pre,
                isLoadingData: !pre.isLoadingData
            }
        ))
    }

    componentDidMount() {
        console.log("----hàm chạy sau khi component render lần đầu----- ")
        this.setState(pre => (
            {
                ...pre,
                studentList:
                    [
                        ...getAll()
                    ]
            }
        ))
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevState.isLoadingData!=this.state.isLoadingData){
            this.setState(pre => (
                {
                    ...pre,
                    studentList:
                        [
                            ...getAll()
                        ]


                }
            ))
        }
    }

    render() {
        return (
            <>
                {console.log("----render------------")}
                <AddComponent handleIsAddSuccess={() => {
                    this.handleLoadingData()
                }}/>
                <table className={'table table-dark'}>
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.studentList.map((e, i) => (
                            <tr key={e.id}>
                                <td>{i + 1}</td>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>
                                    <button onClick={()=>{this.handleShowModal(e)}}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <DeleteComponent handleLoadingData ={this.handleLoadingData} deleteStudent = {this.state.deleteStudent} isShow={this.state.isShow} handleShowModal={this.handleShowModal}/>
            </>
        );
    }
}

export default ListComponent;