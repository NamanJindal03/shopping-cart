import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
class App extends React.Component {
constructor(){
	super();
	this.state = {
		products:[
					{
						title : 'Phone',
						price: '999',
						img:'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1306&q=80',
						qty: 1,
						id:1
					},
					{
						title : 'Watch',
						price: '450',
						img : 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
						qty: 10,
						id:2
					},
					{
						title : 'Laptop',
						price: '9999',
						qty: 1,
						img:'https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80',
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
getCartCount = () =>{
	const {products} = this.state;
	let count =0;
	products.forEach((product) => {
		count += product.qty;
	})
	return count;
}
getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })

    return cartTotal;
  }
render(){
	const {products} = this.state; 
	return (
	<div className="App">
		<Navbar 
			count = {this.getCartCount()}
		/>
		<Cart 
			products = {products}
			onIncreaseQuantity= {this.handleIncreaseQuantity}
			onDecreaseQuantity={this.handleDecreaseQuantity}
			onDeleteQuantity = {this.deleteProduct}
		/>
		<div style={ {padding: 10, fontSize: 20} }>Total: {this.getCartTotal()}</div>
	</div>
	);
}
}

export default App;
