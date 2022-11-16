import React from "react";
const ToDo = (props) => {
  return(
    <>
      <div className="todo_style">        
        <li> {props.data} </li>
        <i className="fa-solid fa-edit" 
        onClick={()=>{
           props.editItem(props.id);   
        }}>        
        </i>
        <i className="fa-solid fa-trash-can"
        onClick={()=>{
          props.delItem(props.id);
        }}> 
        </i>
      </div>
    </>
  );
}
export default ToDo;