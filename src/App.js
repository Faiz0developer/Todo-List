import React, {useState} from 'react'
import './App.css';
import ToDo from './ToDo';

function App() {
  const [list, setList] = useState("");
  const [item, setItem] = useState([]);
  const listItem = (e) =>{
    setList(e.target.value)
  }
  const addList = (e) =>{
    setItem( (oldVal) =>{
      return [...oldVal, list]
    })
    setList("")
  }
   const delList = (i) => {
    setItem( (prev) => {
      return prev.filter( (arr, index) => {
        return index!==i
      });
    });
   }
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a Items" onChange={listItem} value={list} />
          <button onClick={addList}> + </button>

          <ol> 
            {item.map( (itemval, i) => {
              return (
              <ToDo 
                data={itemval} 
                key={i}
                id={i}
                delItem={delList}
                />);
            })
            }              
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
