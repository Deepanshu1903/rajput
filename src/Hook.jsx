import React, { useState } from "react";



const Hook = () => {
  
const [count, setcount] = useState(5);

const IncNum = () => {
    setcount(count + 5);
};
    return(
        <>
        <h1> {count} </h1>
        <button onClick={IncNum}> Click Me </button>
        </>
    );

};

export default Hook;