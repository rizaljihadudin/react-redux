import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, getCounter, getDoubleCounter, increment } from "./counterSlice";

export default function Counter(){
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    // Selector without params
    const doubleCounter = useSelector(getDoubleCounter);

    // Selector with Params
    const tripleCounter = useSelector(state => getCounter(state,3));

    function handleIncrement(){
        dispatch(increment());
    }

    function handleDecrement(){
        dispatch(decrement());
    }

    return(
        <>
            <h1>Counter : {counter}</h1>
            <h1>Double Counter : {doubleCounter}</h1>
            <h1>Triple Counter : {tripleCounter}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={() => dispatch(increment(2))}>Increment + 2</button>
            &nbsp;
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={() => dispatch(decrement(2))}>Decrement - 2</button>
        </>
    )
}