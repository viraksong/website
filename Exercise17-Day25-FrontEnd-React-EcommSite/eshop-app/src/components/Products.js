import { Link } from "react-router-dom";
import Card from "./Card";

const Products = () => {
    return ( 
<div>
    <h1 className="display-6 text-center">All prices are guaranteed.</h1>
    <p className="h6 text-center mb-5">do not wait. Get your holiday gift on time 
        <Link  className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" to="/about">
        FAQ {">"} 
        </Link>
    </p>
    <Card/>
</div>
     );
}
 
export default Products;