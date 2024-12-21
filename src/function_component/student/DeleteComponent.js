import React from "react";
import {deleteById} from "../../service/studentService";



function DeleteComponent({isShow, deleteStudent,handleCloseModal}) {
    console.log("----modal---"+ isShow)
    const handleDelete =()=>{
        deleteById(deleteStudent.id);
        handleCloseModal()

    }

    return (
        isShow &&
        (<div className="modal show" tabIndex="-1" style={{display: 'block'}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>Bạn có muốn xoá {deleteStudent.name}.</p>
                    </div>
                    <div className="modal-footer">
                        <button onClick={handleCloseModal} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                        </button>
                        <button onClick={handleDelete} type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>)
    )

}
export  default React.memo(DeleteComponent) ;