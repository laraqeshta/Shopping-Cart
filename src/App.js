import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { useEffect, useMemo, useState } from 'react';
import FackStore from './services/fackstore';

function App() {

  const [products , setProduct] = useState([]);
  const [cartItem ,  setcartItem]=useState([]);

  //let cartItems = [];
  
  useEffect(() =>{
    let fackStore = new FackStore();
    fackStore.fetchProduct().then((data) =>{
      setProduct(data);

    });

  }, []);


  const addToCart = (item) => {
    let items= cartItem;
    let exists = false;
    for(let i in items){
      if(!items[i].hasOwnProperty('quantity')){
        items[i].quantity = 1;
      }
      if (items.id[i] === item.id){
        items[i].quantity ++;
          exists= true;
          break;
      }
      
   }

   if(!exists){
    items.push(item);
   }
    setcartItem(items);
    //cartItems = items;
  }





  const remove = (item) => {
    let items= cartItem;
    for(let i in items){
       if (items.id[i] === item.id){
           items.splice(i , 1);
           break;
       }
       
    }
    setcartItem(items);

}

  return (
    <div className="App">
      <div className="row">
        <div className="col-md-8">
          <ProductList items={products} handelAddtocart={addToCart} />
        </div>

        <div className="col-4">
          <Cart items={cartItem} handelRemovefromcart ={remove}/>
        </div>
      </div>
    </div>
  );
}

export default App;
