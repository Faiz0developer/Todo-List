import React from "react";
const ToDo = (props) => {
  return(
    <>
      <div className="todo_style">
        <i className="fa fa-times" 
        onClick={()=>{
          props.delItem(props.id);
        }}/>  
        <li> {props.data} </li>
      </div>
    </>
  );
}
export default ToDo;