import { Link } from "react-router-dom";

const Item = (props) => {
    
    let myImg=`img/${props.kImag}`;
    console.log(myImg);
    let show="";
    
    if (props.kStatus!==""){
        show=(  
            <span className="position-absolute top-0 start-0 badge rounded-pill bg-danger">
                    {props.kStatus}!
            </span>
        );
    }

    return ( 
        <div className="col">
            <div className="card h-100">
                <img src={myImg} className="card-img-top" alt="Skyscrapers"/>
                {show}
                <div className="card-body">
                <h5 className="card-title">props.kName</h5>
                <p className="card-text">
                    ${props.kPrice}
                </p>
                </div>
                <span className="text-end">
                <Link to="#" className="btn btn-primary rounded-pill btn-lg">Buy</Link>             
                </span>
                <span className="text-center">{props.kDes}</span>
                <div className="card-footer">
                <small className="text-muted">
                    <Link  className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" to="#">
                    Learn more {">"}  
                    </Link>
                </small>
                </div>
            </div>
        </div> 
     );
}
 
export default Item;