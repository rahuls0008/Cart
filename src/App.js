import React from 'react';

//Import the Components
import CartItem from './CartItem'; 
import Cart from './Cart';  
import NavBar from './NavBar'; 



// Function based Component
// function App() {

//   return (
    
//     <div className="App">
//       <NavBar />
//       <Cart />         {/* Render Cart component */}
//     </div>
//   );
// }



//make it Class based Component 
class App extends React.Component {

      // STATE : A way to store Local Data for the particualr Component
    // just a JS object 
    constructor(){
      super(); // must call Constructor of the parent class (if we're inheriting somethinf from parent class)
      
      this.state = {
          products : [                  //Array of product
              {
                  price: 99,
                  title: 'Watch',
                  qty: 1,
                  img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                  id: 1
              },
              {
                  price: 999,
                  title: 'Mobile Phone',
                  qty: 10,
                  img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1306&q=80',
                  id: 2
              },
              {
                  price: 999,
                  title: 'Laptop',
                  qty: 4,
                  img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1330&q=80',
                  id: 3
              }
          ]
      }
  }

  // Event Handlers
  handleIncreaseQuantity = (product) => {
      console.log('increase buttons clicked ', product);
      
      const {products} = this.state;  //get the products array
      const index = products.indexOf(product);//get the index of this product from the array, so that we can change the quantity of that particualr product

      products[index].qty += 1;

      this.setState({
          // products: products
          products       //SHORTHAND if key = value
      })

  }

  handleDecreaseQuantity = (product) => {

      const {products} = this.state;  //get the products array
      const index = products.indexOf(product);//get the index of this product from the array, so that we can change the quantity of that particualr product

      if(products[index].qty == 0){
          return;
      }

      products[index].qty -= 1;

      this.setState({
          // products: products
          products       //SHORTHAND if key = value
      })

  }


  handleDeleteProduct = (id) => {
 
      const {products} = this.state;  //get the products array
      
      const items = products.filter((item) => item.id !== id );//items is an Array with all the products except that is to be deleted
                                                              // items = [products - product to be deleted]

      this.setState({
          products: items       
      })

  }

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    //loop the products
    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  }

  getCartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;

    //loop the products
    products.map((product) => {
      cartTotal += product.qty*product.price;
    });

    return cartTotal;
  }

  render(){

    const {products} = this.state;

    return (
    
      <div className="App">
        {/* Render Cart component */}
        <NavBar 
          count={this.getCartCount()}            //call the function here itself 
                                                    //pass the reference if you want to call it on child component (as below)
        />                                            
        
        {/* Render Cart component */}
        <Cart 
          //pass the Props        //Everything is here is passed as a prop to child component CartItem
          products = {products} 
          key={products.id}
          onIncreaseQuantity = {this.handleIncreaseQuantity}     //pass the reference of the function  (see above NavBar function is called here itself)
          onDecreaseQuantity = {this.handleDecreaseQuantity}     //pass the reference of the function
          onDeleteProduct = {this.handleDeleteProduct}
        />

        <div style={ {fontSize:30, padding:20} }> 
          TOTAL : {this.getCartTotal()}            {/*   //call the function here itself 
                                                               //pass the reference if you want to call it on child component (as below)    */}  
        </div>    
                                                         
      </div>
    );

  }

}










export default App;
