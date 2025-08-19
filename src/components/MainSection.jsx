import Header from "./Header"
import SubSection from "./SubSection"
import Todos from "./Todos"
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Options from "./Options";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function MainSection(){



        const [inpt,setInpt]=useState("")
        const [todos,setTodo]=useState([
            {id:uuidv4(),title:"قراءة كتاب", discription:"كتاب كذا كذا",isCompleted:false},
            {id:uuidv4(),title:" حل ليت كود", discription:"كتاب كذا كذا",isCompleted:false},
            {id:uuidv4(),title:"قراءة كتاب", discription:"كتاب كذا كذا",isCompleted:false}
        ])
        const [alignment, setAlignment] = useState('right');
        const [filteredTodos, setFilteredTodos] = useState([]);

        const [updatedTodo,setUpdatedTodo] = useState({title:"",discription:""});


        useEffect(()=>{
            let storedTodos = JSON.parse(localStorage.getItem("todos"));
            setTodo(storedTodos);
        },[]);



        function handleClick(){
            let updatedTodos=[...todos,{id:uuidv4(),title:inpt,isCompleted:false,discription:"none"}]
            setTodo(updatedTodos)
            filterAccordingToAlignment(alignment, updatedTodos);
            localStorage.setItem("todos",JSON.stringify(updatedTodos))

            setInpt("");
        }

        function handleAddingTodo(event){
        setInpt(event.target.value);
        }

        function completeTask(idOfTODOCompleted){
          
            let updatedTODOS = todos.map((t)=>{
                if(t.id === idOfTODOCompleted){

                    return ({...t,isCompleted:!t.isCompleted})
                }
                 return t

            })
            console.log(updatedTODOS);
            
            setTodo(updatedTODOS);
            localStorage.setItem("todos",JSON.stringify(updatedTODOS))
           filterAccordingToAlignment(alignment, updatedTODOS);


        }
        function deleteTask(id){
            let updatedTodosAfterDelete = todos.filter((t)=>{
                return t.id !== id;
            });
            setTodo(updatedTodosAfterDelete);
            localStorage.setItem("todos",JSON.stringify(updatedTodosAfterDelete))

            filterAccordingToAlignment(alignment,updatedTodosAfterDelete);
        }
        function updateTodo(id){
                let editingAtodo =todos.map((t)=>{
                    if(id === t.id){
                      return {
                                ...t,
                                title: updatedTodo.title,
                                discription: updatedTodo.discription
                            };
                    }
                    return t;
                })
                setTodo(editingAtodo);
                localStorage.setItem("todos",JSON.stringify(editingAtodo))
                
                setUpdatedTodo({...updateTodo,title:"",discription:""});
        }
        

        
        function handleFilter(event,newAlignment){
            
            if (newAlignment !== null) {
                setAlignment(newAlignment);
                filterAccordingToAlignment(newAlignment, todos);
            }

            
        }
        function filterAccordingToAlignment(newAlignment,todos){


             if (newAlignment === 'center') {
                setFilteredTodos(todos.filter(t => t.isCompleted));
            } else if (newAlignment === 'left') {
                setFilteredTodos(todos.filter(t => !t.isCompleted));
            } else {
                setFilteredTodos([]); 
            }
        }
        


    return (

    <Container maxWidth="sm" >
            <Card sx={{width:"100%"}}>
                <CardContent>
                    <Header/>
                    <SubSection handleFilter ={handleFilter} alignment={alignment}/>
                   
                    <Todos todos={(filteredTodos.length > 0 || alignment !== 'right') ? filteredTodos : todos} deleteTask={deleteTask} updateTodo={updateTodo} updatedTodo={updatedTodo} setUpdatedTodo={setUpdatedTodo} completeTask={completeTask}/>
                </CardContent>
                <CardActions>
                    <Options handleClick={handleClick} inpt={inpt} handleAddingTodo={handleAddingTodo}/>
                </CardActions>
            </Card>
      </Container>

    
    )
}