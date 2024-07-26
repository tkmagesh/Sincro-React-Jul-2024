import { useDispatch, useSelector } from "react-redux";
import spinnerSlice from "./spinnerSlice";
import { useState } from "react";

function Spinner(){
    const value = useSelector(storeState => storeState.spinnerState)
    const dispatch = useDispatch()
    const {increment, decrement} = spinnerSlice.actions
    const [delta, setDelta] = useState(0)
    return (
      <>
        <h1>Spinner</h1>
        <input type="number" value={delta} onChange={evt => setDelta(parseInt(evt.target.value))}/>
        <button onClick={() => dispatch(decrement(delta))}>Decrement</button>
        <span>[ {value} ]</span>
        <button onClick={() => dispatch(increment(delta))}>Increment</button>
      </>
    );
}

export default Spinner;