import React, { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case "Increment":
            return { count: state.count + action.payload };
        case "Decrement":
            return { count: state.count - action.payload }; // Fixed: Added payload
        case "reset":
            return { count: 0 };
        default:
            return state;
    }
};

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <>
            <div style={{textAlign:"center"}}>
           <h2>Topic:UseReducer</h2>
            <h4 style={{textAlign:"center"}}>Counter: {state.count}</h4>
            <div className="d-flex gap-3 justify-content-center">
                <button className="btn btn-success me-2" onClick={() => dispatch({ type: "Increment", payload: 5 })}>
                    +Increment
                </button>
                <button className="btn btn-warning me-2" onClick={() => dispatch({ type: "Decrement", payload: 1 })}>
                    -Decrement
                </button>
                <button className="btn btn-danger me-2" onClick={() => dispatch({ type: "reset" })}>
                    Reset
                </button>
            </div>
            </div>
        </>
    );
};

export default Counter;
