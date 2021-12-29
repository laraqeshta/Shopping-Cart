class FackStore{
     

    async fetchProduct(){
        let response = await fetch('https://fakestoreapi.com/products');
        return response.json();

    }

}


export default FackStore;