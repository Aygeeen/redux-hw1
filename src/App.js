import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
    const dispatch = useDispatch()
    const num = useSelector(state => state.num)
    const increment = () => {
        dispatch({type: "DECREMENT", payload: 1})
    }
    const decrement = () => {
        dispatch({type: "INCREMENT", payload: 1})
    }
    return (
        <>
            <div>
                <h1>{num}</h1>
                <div style={{display: "flex"}}>
                    <button onClick={() => increment()}>+</button>
                    <button onClick={() => decrement()}>-</button>
                </div>
            </div>
        </>
    )
}

export default App;
