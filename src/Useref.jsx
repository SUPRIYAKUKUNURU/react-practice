import React, { useEffect, useRef } from "react";

function Useref() {
  const Data = useRef(null);


  console.log(Data);

  const handleSubmit = (e) => {
   e.preventDefault();
    console.log("Button clicked");
    console.log(Data.current.value);
  };

   useEffect(()=>{
   Data.current.focus();
     },[])

  return (
    <div style={{textAlign:"center"}}>
      <form>
        <h2>Topic:Useref</h2>
        <input type="text" ref={Data} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Useref;
