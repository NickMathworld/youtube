import React, { useDebugValue, useState } from "react";
import styled from 'styled-components'
import './style.css';
const Input = styled.input.attrs(props => ({
    // we can define static props
    type: "text",
    // or we can define dynamic ones
    size: props.size || "1em",
  }))`
    font-size: 1em;
    border-radius: 3px;
    margin: ${props => props.size};
    padding: ${props => props.size};
  `;
function FilterVideo(){
    const onInputchange = (event) => {
        setInput(event.target.value);
      };
    const [input, setInput] = useState("");
    return (
        <div className ="filter-video">
             <Input placeholder={"Search..."} onChange={onInputchange}></Input>
        </div>
    );
}

export default FilterVideo;