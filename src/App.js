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
getCartCount = () =>{
	const {products} = this.state;
	let count =0;
	products.forEach((product) => {
		count += product.qty;
	})
	return count;
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
	</div>
	);
}
}

export default App;
