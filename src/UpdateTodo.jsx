import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router";
import { getTodo, updateTodo } from "./todoListSlice";

export default function UpdateTodo(){

    const params = useParams();
    const todo = useSelector((state) => getTodo(state, Number(params.id)));
    console.log(todo);
    const [name, setName] = useState(todo.name);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleClick(){
        dispatch(updateTodo({id: todo.id, name}));
        navigate('/todolist')   
    }

    return(
        <>
            <h1>Update Todo</h1>
            <Link to="/todolist">Back</Link>
            <br />
            <input type="text" placeholder="Update todo Name" value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={handleClick}>Update</button>
        </>
    )
}