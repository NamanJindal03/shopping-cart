import React from 'react'
const CartItem = (props) => {
    
    
    
        const {title, price, qty} = props.product;
        const{onIncreaseQuantity, onDecreaseQuantity, onDeleteQuantity, product} = props;
        return(
            <div className= "cart-item">
                <div className="left-block">
                    <img style={style.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>Rs {price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions"> 
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/992/992651.svg" 
                            onClick = {()=>onIncreaseQuantity(product)}
                        />
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1665/1665612.svg" 
                            onClick= {()=> onDecreaseQuantity(product)}
                            //onClick= {this.props.test}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://image.flaticon.com/icons/svg/1214/1214428.svg" 
                            onClick={()=> onDeleteQuantity(product.id)}
                        />
                    </div>
                </div>
            </div>
        )
}
let style = {
    image : {
        height: 110,
        width: 110,
        borderRadius:4,
        background: '#ccc'
    }
}
export default CartItem;