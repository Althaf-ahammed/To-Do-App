import React,{useContext} from 'react'
import { ToDosContext } from "../toDosContext";

import "../App.css";


function Complete() {
    const {toDos} = useContext(ToDosContext)
  return (
    <div>
        <div className="todos">
          <p className='todos-heading' >Completed Tasks</p>
        {toDos.map((obj)=>{
            if(obj.status){
                return ( <div className='todo'>
                    <div className='left'>
                    <p>{obj.text}</p>
                </div>
            </div>)
            }
        })}
        </div>
    </div>
  )
}

export default Complete