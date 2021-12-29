
import { useEffect, useState } from 'react';

const Cart = (props) => {


   // const [items ,setItems] =useState([]);
    
   const items =props.items;

    const [total, setTotal] = useState(0);


  /*  useEffect(() =>{
        setItems(props.items);
    } , [props.items]);*/


    useEffect(() =>{
        let sum = 0;
        for(let i in items ){
            sum+= items[i].price;
        }
        setTotal(sum);

    } ,[items]);

   

    return(
      <table className="table">
          <tbody>
              {items.map((item ,idx) => {
                  return <tr key={item.id}> 
                  <th>{item.title} x {item.quantity}</th>
                  <td><span className="currency">$</span>
                  <span>{item.price * item.quantity}</span></td>
                  <td><button className="btn btn-sm btn-danger" onClick={(e) => {
                      e.preventDefault();  
                      props.handelRemovefromcart(item); 
                      }
                      }
                      >X</button></td>
                  </tr>
              })}

          </tbody>

          <tfoot>
              <tr>
                  <th>Total</th>
                  <td colSpan="2">
                      <span className="fs-2 currency">$</span>
                      <span className="fs-2" id="total">{total}</span>
                  </td>
              </tr>
          </tfoot>
      </table>  
    );
}


export default Cart;