import { useState } from "react";
import Data from "../Data.json";
import Item from "./Item";

const Card = () => {
    const [product, setProduct] = useState(Data);
    console.log('productbefore',product.categories);
    // const items = product.categories.map( (elem)=>{
    //     console.log('elem',elem);
    //     return ;
    // })
    return ( 
    <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-4 g-4 position-relative">
            {
                product.categories.map( (elem)=>{
                    // console.log('elem.items', elem.items);
                    const allitems = elem.items.map( (item)=> {
                        // console.log("item",item)    ;
                        return <Item key={item.id} kName={item.proName} kDes={item.des} kStatus={item.status}  kPrice={item.price} kImag={item.img}/>;
                        }

                    );
                    
                    // console.log("allitems",allitems);
                    return allitems;
                })
               
            }
        </div>
    </div>
     );
}
 
export default Card;