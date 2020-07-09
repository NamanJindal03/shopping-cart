import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';

class App extends React.Component {
constructor(){
	super();
	this.state = {
		products:[],
		loader: true,

	}
	this.db = firebase.firestore();
}
componentDidMount(){
	console.log("in component did mount");
	this.db
		.collection('products')
		//we can query data in many ways -  sorting(), get specific data
		//.where('price', "==", 999)
		//we can also nest queries - applying more than 1 condition
		//.where('title', '==', 'Mug')

		//we can also sort by using
		//asc or desc - asc by default
		//.orderBy('price', 'asc')

		//.onsnapshot is a method given by firebase, it is basically a listener on the database, whenever database updates this
		//onsnapshot is fired again, and hence our state is set with the new updated producgt
		.onSnapshot((snapshot) => {
			//console.log(snapshot);
			snapshot.docs.map((doc)=>{
				//console.log("messgae doc", doc.data());
			})
			const products = snapshot.docs.map((doc) => {
				const data = doc.data();
				data['id']= doc.id
				return data;
			})
			//.log(products);

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
	/////this was used to update in non persistent data
	// products[index].qty += 1;
	// this.setState({
	// 	products
	// })

	//updating through firebase
	const docRef = this.db.collection('products').doc(products[index].id);
	console.log(products[index].id);
	docRef.update({
		qty: products[index].qty +1
	})
	.then(()=>{
		console.log("product updated succesfully");
	})
	.catch((err)=>{
		console.log("error updating the product", err);
	})
}
handleDecreaseQuantity = (product) =>{
	//console.log("called");
	const {products} = this.state;
	if(product.qty>0){
		const index = products.indexOf(product);
		// products[index].qty -= 1;
		// this.setState({
		// 	products
		// })
		//updating through firebase
		const docRef = this.db.collection('products').doc(products[index].id);
		console.log(products[index].id);
		docRef.update({
			qty: products[index].qty +1
		})
		.then(()=>{
			console.log("product updated succesfully");
		})
		.catch((err)=>{
			console.log("error updating the product", err);
		})
	}
	
}
deleteProduct = (id) =>{
	const {products} = this.state;
	// const items = products.filter((item)=> item.id !== id); // returns an array with  products except for the once which has the id that we passed
	// this.setState({
	// 	products: items
	// })
	const docRef = this.db.collection('products').doc(id);
		
		docRef
		.delete()
		.then(()=>{
			console.log("deleted successfully");
		})
		.catch((err)=>{
			console.log("error deleting the product", err);
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

addProduct = () => {
	this.db
		.collection('products')
		.add({
			img: '',
			price: 12321,
			qty: 2,
			title: "Washing Machine"
		})
		.then((docRef) => {
			console.log("product has been added",docRef);

		})
		.catch((error) => {
			console.log(error);
		})
}
render(){
	const {products, loader} = this.state; 
	return (
	<div className="App">
		<Navbar 
			count = {this.getCartCount()}
		/>
		<button onClick={this.addProduct} style={{padding: 20, fontSize: 20}}>Add a Product</button>
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
