import React from 'react';

//Import the Components
import CartItem from './CartItem'; 


// Cart : Class based component
class Cart extends React.Component {   //Cart will inherit some features from Component class in React package
    
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
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 10,
                    img: '',
                    id: 2
                },
                {
                    price: 999,
                    title: 'Laptop',
                    qty: 4,
                    img: '',
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





    

    // For "Class Component" to be a "React Component" --> we need render() method 
    render(){
        const arr = [1, 2, 3, 4, 5];
        
        const {products} = this.state;   //object destructuring to get the products
        
        return(
            
            <div className='cart'> 
                {/* rendering a list */}
                {arr}             

                {/* render a list + 5 */}
                {arr.map( (item) => {     {/*    .map() - iterate over each array item and do some action acording to callback function */}
                    return item + 5;
                })}




                {/*----------------  render CartItems -----------------*/}

                {/* Method 1 : Directly */}
                {/* <CartItem />
                    <CartItem />
                    <CartItem /> */}

                {/* Method 2 : passing Props here itselff */}
                {/* <CartItem qty={1} price={99} title={"watch"} img={''}/> */}
                
                {/* Method 3 : passing Props from state*/}
                    {/* Iterate over Products array and return CartItem for it */}
                {products.map((product) => {
                    return (
                        <CartItem 
                            //pass the Props        //Everything is here is passed as a prop to child component CartItem
                            product = {product} 
                            key={product.id}
                            onIncreaseQuantity = {this.handleIncreaseQuantity}     //pass the reference of the function
                            onDecreaseQuantity = {this.handleDecreaseQuantity}     //pass the reference of the function
                            onDeleteProduct = {this.handleDeleteProduct}
                            
                            //we can pretty much pass anything as a props
                            isLoggedin = {false}
                            func={() => console.log('passed function as a prop')} 
                            jsx = {<h1> Test </h1>}
                            component = {<CartItem />}
                        />
                    )
                })}
                
                
            </div>
        );
        
    }
}      



//export the Component
export default Cart;