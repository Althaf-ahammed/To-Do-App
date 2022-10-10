import React,{useContext} from 'react'
import { ToDoContext } from "../toDoContext";
import { ToDosContext } from "../toDosContext";
import "../App.css";


function Header() {
  const handleAdd = (e)=>{
    e.preventDefault()
    if(toDo === ''){
      alert('Write a task')
    }else{
       setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])
       setToDo('')
    }
  }
    const {toDo} = useContext(ToDoContext)
    const {setToDo} = useContext(ToDoContext)
    const {toDos} = useContext(ToDosContext)
    const {setToDos} = useContext(ToDosContext)
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const d = new Date();
  let day = weekday[d.getDay()]
  return (
    <div>
        <div className="mainHeading">
        <h1>Althaf's ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={handleAdd} className="fas fa-plus"></i>
      </div>
    </div>
  )
}

export default Header

