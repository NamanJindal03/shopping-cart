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
    render() {
        const {products} = this.state;
        return(
            <div className="cart">
                { products.map((product)=> {
                    return(
                    <CartItem 
                        product={product} 
                        key={product.id}
                    />
                    )
                })}
            </div>
        )
    }
}

export default Card;