import React from 'react'
class CartItem extends React.Component {
    
    increaseQuantity = () =>{
        console.log("this", this);
        //method 1
        // this.setState({
        //     qty: this.state.qty + 1
        // })
        //method 2
        this.setState((prevState) => {
            return{
                qty: prevState.qty + 1
            } 
        })
    }
    render() {
        const {title, price, qty} = this.props.product;
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
                            onClick = {this.increaseQuantity}
                        />
                        <img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/1665/1665612.svg" />
                        <img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1214/1214428.svg" />
                    </div>
                </div>
            </div>
        )
    }
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