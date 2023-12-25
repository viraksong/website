import React, { useState } from "react";

const FunProsState = (props) => {
    const [value,setValue] = useState(props.name||"Hi");
    const [bool,setBool] = useState(true);
    const [toggle, setToggle] = useState("Global")
    
    let ShowHide = ()=>{
        if (bool){
            setValue("Global");
            setToggle(value);
        }else{
            setValue("World");
            setToggle(value);
        }
        setBool(!bool)
    };
   
    return ( 
        <div>
            <h1>Hello {value}!</h1>
            <button className="btn btn-primary" onClick={ShowHide}>{toggle}</button>
        </div>
     );
}
 
export default FunProsState;