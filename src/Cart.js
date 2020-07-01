import React from 'react';
import CartItem from './CartItem';
const Card = (props) => {

    const {products} = props;
    return(
        <div className="cart">
            { products.map((product)=> {
                return(
                <CartItem 
                    product={product} 
                    key={product.id}
                    onIncreaseQuantity= {props.onIncreaseQuantity}
                    onDecreaseQuantity={props.onDecreaseQuantity}
                    onDeleteQuantity = {props.onDeleteQuantity}
                    test = {props.test}
                />
                )
            })}
        </div>
    )
    
}

export default Card;

