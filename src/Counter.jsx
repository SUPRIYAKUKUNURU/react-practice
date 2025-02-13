import React,{useReducer} from "react";

const reducer = (state ,action) =>{
    switch (action.type){
        case "Increment":
            return {count:state.count + action.payload};
        case "Decrement":
            return {count: state.count - 1}; 
        case "reset":
            return{count:0};
        default:
            return state;
    }          
    };

    const Counter = () => {
        const [state,dispatch]=useReducer(reducer,{count:0});
        return(
        <>
        
        <h2>Counter:{state.count}</h2>
        <div className=" d-flex gap-3 justify-content-center">
         <button className="btn btn-success me-2" onClick={()=>dispatch({ type: "increment",payload:5})}>+Increment</button>
         <button className="btn btn-warning me-2"onClick={()=>dispatch({ type: "decrement"})}>-Decrement</button>
         <button className="btn btn-danger me-2" onClick={()=>dispatch({ type:"reset"})}>Reset</button>
         </div>
        </>
    )
}
export default Counter;
