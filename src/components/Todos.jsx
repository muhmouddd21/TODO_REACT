
import OneTodo from "./OneTodo";


export default function Todos({todos,completeTask,deleteTask,updateTodo,updatedTodo,setUpdatedTodo}){



    const MappedTodos = todos.map((t,index)=>{
       return <OneTodo key={t.id} todo={t} completeTask ={completeTask} deleteTask={deleteTask} updateTodo={updateTodo} updatedTodo={updatedTodo} setUpdatedTodo={setUpdatedTodo} index={index+1}/>
    })
    return (
        <>
            {
            MappedTodos
            }
        </>

        
     
    )
}