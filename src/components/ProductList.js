import ProductCard from "./ProductCard"

const ProductList= (props) => {

    const items = props.items;

    return(
        <div className="product-list">
            {items.map((item , idx) => {
                return <ProductCard item={item} key={item.id} handelAddtocart={props.handelAddtocart}/>
            })}
        </div>
    );

}


export default ProductList;