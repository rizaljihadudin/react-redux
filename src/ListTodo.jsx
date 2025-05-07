import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeTodo } from "./todoListSlice";
import { Link } from "react-router";

export default function ListTodo(){
    const todos = useSelector((state) => state.todoList);
    const dispatch = useDispatch();

    function handleDeleteTodo(id){
        if(confirm('Apakah anda yakin ingin menghapus data ini?')){
            dispatch(removeTodo({id: id}))
        }
    }

    return(
        <>
            <h1>List Todo</h1>
            <Link to="/todolist/add">Add Todo</Link>
            <table border={1} style={{
                width: '100%',
                marginTop: '30px'
            }}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => {
                        return (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.name}</td>
                                <td>
                                    <Link to={`/todolist/${todo.id}/edit`}>Update</Link>
                                    <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                        
                    })}
                </tbody>
            </table>
        </>
    )
}