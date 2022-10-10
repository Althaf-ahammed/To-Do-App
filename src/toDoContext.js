import { createContext,useState } from "react";

export const ToDoContext = createContext(null)

 function ToDo ({children}){
    const [toDo, setToDo] = useState('')

        return(
            <ToDoContext.Provider value={{toDo,setToDo}} >
                {children}
            </ToDoContext.Provider>
        )
}
export default ToDo