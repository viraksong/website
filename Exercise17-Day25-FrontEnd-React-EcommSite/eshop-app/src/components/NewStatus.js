const NewStatus = (props) => {
    let show="";
    // if not empty, it is new item and assign new item
    if (props.status==="New"){
        show=(  
            <span className="position-absolute top-0 start-0 badge rounded-pill bg-danger">
                    {props.status}!
            </span>
        );
    }
    return ( 
        <div>
           {show}
        </div>
     );
}
 
export default NewStatus;