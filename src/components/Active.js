import React,{useContext} from 'react'

import { ToDosContext } from "../toDosContext";
import "../App.css";
import './Active.css'


function Active() {
  const {toDos,setToDos} = useContext(ToDosContext)
  const handleDelete = (index)=> {

    var ask = window.confirm("Do you want to delete the task?");
    if (ask) {
      const test = [...toDos];
        test.splice(index, 1);
        setToDos(test)
    }else {
      console.log("Don't delete");
    }}
    
  return (
    <div>
        <div className="todos">
          <p className='todos-heading' >Active Tasks</p>
        {toDos?.map((obj) => {

          return (<div className="todo">
            <div className="left">
              <input onChange={(e) => {
                
                setToDos(toDos.filter(obj2 => {
                  if (obj2.id === obj.id) {
                    obj2.status = e.target.checked
                  }
                  return obj2
                }))
              }}
               value={obj.status} type="checkbox" name="" id=""  />
               
              
              <p>{obj.text}</p>
           
              
            </div>
            <div className="right">
              <i onClick={handleDelete} className="fas fa-times"></i>
            </div>
          </div>)
        })}

      </div>
    </div>
  )
  
}

export default Active

//() => setToDos(toDos.filter(obj2 => {
//  let temp;
//  if (obj2.id !== obj.id) {
 // temp = obj2
//  }
//  return temp
//  }))