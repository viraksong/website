import React, { useState, useEffect } from "react";

const AddCart = (props) => {
    const [countItem,setCountItem] = useState(props.name||0);
    
    
    useEffect(()=>{
        
    },[countItem]);

    let Buy = ()=>{
        setCountItem( (previousCount)=>previousCount + 1)   
        
    };
    
    return ( 
        <div> 
            {/* <Link to="#" className="btn btn-primary rounded-pill btn-lg">Buy</Link>               */}
            <button 
                type="button" 
                className="btn btn-primary rounded-pill btn-lg"
                onClick={Buy}
            >  
            Buy   
            </button>
        </div>
     );
}
 
export default AddCart;