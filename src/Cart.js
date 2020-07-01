import React from 'react';
import CartItem from './CartItem';
class Card extends React.Component {
    constructor(){
        super();
        this.state = {
            products:[
                        {
                            title : 'Phone',
                            price: '999',
                            qty: 1,
                            id:1
                        },
                        {
                            title : 'Watch',
                            price: '450',
                            qty: 10,
                            id:2
                        },
                        {
                            title : 'Laptop',
                            price: '9999',
                            qty: 1,
                            id:3
                        },
                        
                    ]
        }
    }
    handleIncreaseQuantity = (product) =>{
        console.log('Heyy Please ', product);
        const {products} = this.state;
        //now we have to make changes in particular product, so we need to find that in all my proudcts
        const index = products.indexOf(product);
        products[index].qty += 1;
        this.setState({
            products
        })
    }
    handleDecreaseQuantity = (product) =>{
        console.log("called");
        const {products} = this.state;
        if(product.qty>0){
            const index = products.indexOf(product);
            products[index].qty -= 1;
            this.setState({
                products
            })
        }
        
    }
    deleteProduct = (id) =>{
        const {products} = this.state;
        const items = products.filter((item)=> item.id !== id); // returns an array with  products except for the once which has the id that we passed
        this.setState({
            products: items
        })
    }
    test = () =>{
        console.log("naman");
    }

    render() {
        const {products} = this.state;
        return(
            <div className="cart">
                { products.map((product)=> {
                    return(
                    <CartItem 
                        product={product} 
                        key={product.id}
                        onIncreaseQuantity= {this.handleIncreaseQuantity}
                        onDecreaseQuantity={this.handleDecreaseQuantity}
                        onDeleteQuantity = {this.deleteProduct}
                        test = {this.test}
                    />
                    )
                })}
            </div>
        )
    }
}

export default Card;

