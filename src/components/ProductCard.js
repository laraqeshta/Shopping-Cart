const ProductCard = (props) => {
    const item = props.item;

    const addToCart = props.handelAddtocart;

    return (
        <div className="card">
            <div className="row">
                <div className="col-md-4">
                    <img src={item.image} alt="" 
                        className="img-fluid m-3" height="150"/>
                </div>

                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="h5 mt-3 mb-4">{item.title}</h3>
                    </div>

                    <div className="mb-3">
                        <p className="text-muted fs-6">{item.description}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="fs-3 text-success">$ {item.price}</div>
                        <div>
                            <button className="btn btn-outline-primary" onClick={(e) => {
                                 e.preventDefault();
                                 addToCart(item);
                                 } }>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ProductCard;