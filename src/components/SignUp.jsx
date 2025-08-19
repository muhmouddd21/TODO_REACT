import { useState } from "react";
import InputComponent from "./InputComponent";

export default function SignUp(){
 
    const [name,setName]= useState("");
    const [Age,setAge]= useState("");
    const [errors,setErrors] = useState({name:"",Age:""});
    const isFormValid = name && Age && !errors.name && !errors.Age;
    function handleName(event){

        let newName = event.target.value;
        setName(newName)
    }
    function handleAge(event){
        if(isNaN(Number(event.target.value))){
            setAge(event.target.value);
            setErrors({...errors,Age:"You should pass a number"});
        }else if(Number(event.target.value) < 12 || Number(event.target.value) > 80){
            setAge(event.target.value);
            setErrors({...errors,Age:"You have to be bigger than 12 years old"})
        }else{
            setErrors({...errors,Age:""})
            setAge(event.target.value);
        }
      
    }
    function handleSubmit(event){
        event.preventDefault();
        let flag =false;
        if(name && Age && !errors.name && !errors.Age){
            console.log("name",name,"age",Age);
            flag=true;
        }
        return flag;
    }

    
    return(
        <>
        <InputComponent labelName="Full Name" value={name} setValue ={handleName}/>
        <InputComponent labelName="Age" value={Age} setValue ={handleAge}  errors={errors.Age}/>
        <button onClick={handleSubmit} disabled={!isFormValid} >submit</button>
        <div><p>heeeeeeeeeeey</p></div>
        </>
    )
}