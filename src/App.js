import React, {useState, useEffect} from 'react'
import './App.css';
import ToDo from './ToDo';


const getLocaleStorage = () => {
  const lists = localStorage.getItem("daily-list")
  if(lists){
    return JSON.parse(lists);
  } else{
    return [];
  }
}


function App() {
  const [list, setList] = useState("");
  const [item, setItem] = useState(getLocaleStorage());
  const [editList, setEditList] = useState("");
  const [toggle, setToggle] = useState(false);

  const listItem = (e) =>{
    setList(e.target.value)
  }


  // add items
  const addList = (e) =>{
    if(!list){
      setItem([]);
    } 
    // else if(list && toggle){
    //   setItem (
    //     item.map((elem, i)=>{
    //       if(i===editList){
    //       return [...elem, list];
    //       }
    //     })
    //   );
    //   setList("")
    //   setEditList(null)
    //   setToggle(false)
    // }
    else{
      const myNewData = {
        name: list
      };
      setItem([...item, list])
      setList("")
    }
    
  }


  // delete the items
   const delList = (i) => {
    setItem( (prev) => {
      return prev.filter( (arr, index) => {
        return index!==i
      });
    });
   }


  //  delete all items
   const deleteAll = () => {
      setItem([])    
   }


  //  edit the items
  const editItem = (index) =>{
    let ItemEdited = item.find((curElem, i)=>{
      return i === index
    });
    setList(ItemEdited)
    setEditList(index)
    setToggle(true)
  }



  //  store in localStorage
   useEffect(()=>{
    {localStorage.setItem("daily-list", JSON.stringify(item))}
   },[item])
   
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder=" ✍ Add  Items" onChange={listItem} value={list} />

          {toggle ? (<i className="fa-solid fa-edit" onClick={addList}></i>)
          :
          (<button onClick={addList}> + </button>)
          }

          <ol> 
            {item.map( (itemval, i) => {
              return (
              <ToDo 
                data={itemval} 
                key={i}
                id={i}
                delItem={delList}
                editItem = {editItem}
                />);
            })
            }              
          </ol>
        </div>
        <div>
          <button className='btn' onClick={deleteAll}>Check List</button>
        </div>
      </div>
    </>
  );
}

export default App;
