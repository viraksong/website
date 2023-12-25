import { Link } from "react-router-dom";
import Data from "../Data.json";
import Item from "./Item";

const Products = () => {
    return ( 
<div>
    <h1 className="display-6 text-center">All prices are guaranteed.</h1>
    <p className="h6 text-center mb-5">do not wait. Get your holiday gift on time 
        <Link  className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" to="about.html">
        FAQ {">"} 
        </Link>
    </p>


</div>
     );
}
 
export default Products;