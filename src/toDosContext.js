import { createContext,useState } from "react";

export const ToDosContext = createContext(null)

 function ToDos ({children}){
    const [toDos, setToDos] = useState([])

        return(
            <ToDosContext.Provider value={{toDos,setToDos}} >
                {children}
            </ToDosContext.Provider>
        )
}

export default ToDos