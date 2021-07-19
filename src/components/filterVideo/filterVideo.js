import React, { useDebugValue, useState } from "react";
import './style.css';
function FilterVideo(){
    const onInputchange = (event) => {
        setInput(event.target.value);
      };
    const [input, setInput] = useState("");
    return (
        <div className ="filter-video">
             <input placeholder={"Search..."} onChange={onInputchange}></input>
        </div>
    );
}

export default FilterVideo;