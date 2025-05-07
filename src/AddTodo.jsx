import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addTodo } from "./todoListSlice";

export default function AddTodo(){

    const [name, setName] = useState(''); 

    const dispatch = useDispatch();
    const navigate = useNavigate();


    function handleClick(){
        dispatch(addTodo({name}));
        navigate('/todolist')
    }

    return(
        <>
            <h1>Add Todo</h1>
            <input type="text" placeholder="Input todo Name" onChange={(e) => setName(e.target.value)}/>
            <button onClick={handleClick}>Add</button>
        </>
    )
}