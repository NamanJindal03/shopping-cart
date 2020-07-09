import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';
class App extends React.Component {
constructor(){
	super();
	this.state = {
		products:[],
		loader: true
	}
}
componentDidMount(){
	console.log("in component did mount");
	firebase
		.firestore()
		.collection('products')
		//.onsnapshot is a method given by firebase, it is basically a listener on the database, whenever database updates this
		//onsnapshot is fired again, and hence our state is set with the new updated producgt
		.onSnapshot((snapshot) => {
			console.log(snapshot);
			snapshot.docs.map((doc)=>{
				console.log("messgae doc", doc.data());
			})
			const products = snapshot.docs.map((doc) => {
				const data = doc.data();
				data['id']= doc.id
				return data;
			})
			console.log(products);

			this.setState({
				products,
				loader: false
			})
		})
		// .get()
		// .then((snapshot) => {
		// 	console.log(snapshot);
		// 	snapshot.docs.map((doc)=>{
		// 		console.log("messgae doc", doc.data());
		// 	})
		// 	const products = snapshot.docs.map((doc) => {
		// 		const data = doc.data();
		// 		data['id']= doc.id
		// 		return data;
		// 	})
		// 	console.log(products);

		// 	this.setState({
		// 		products,
		// 		loader: false
		// 	})
		// })
		
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
	  cartTotal = cartTotal + product.qty * product.price;
	  return cartTotal;
    })
	return cartTotal;
  }
render(){
	const {products, loader} = this.state; 
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
		{loader && <h1>Loading Products ....</h1>}
		<div style={ {padding: 10, fontSize: 20} }>Total: {this.getCartTotal()}</div>
	</div>
	);
}
}

export default App;
