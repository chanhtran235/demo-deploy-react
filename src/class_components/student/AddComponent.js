import React from "react";
import {addNew, getAll} from "../../service/studentService";

class AddComponent extends React.Component{
    constructor(prop) {
        super(prop);
        this.state ={
            student: {
                id: "",
                name:""
            }
        }
    }
    handleAdd(){
      addNew(this.state.student);
        console.log(getAll());
        this.props.handleIsAddSuccess();
    }
    handleOnChange(event){
        console.log(event.target.value)
        this.setState(pre=>({
            ...pre,
            student :{
                ...pre.student,
                [event.target.name]: event.target.value,
            }
        }));
        console.log(this.state.student)
    }
    render() {
        return (
            <>
             <form>
                 <input name={'id'} onChange={(event)=>{
                     this.handleOnChange(event)
                 }} placeholder={'ID'}/>
                 <input name={'name'} onChange={(event)=>{
                     this.handleOnChange(event)
                 }} placeholder={'Name'}/>
                 <button type={'button'} onClick={
                     this.handleAdd.bind(this)
                 }>Save</button>
             </form>
            </>
        )
    }
}
export default AddComponent ;