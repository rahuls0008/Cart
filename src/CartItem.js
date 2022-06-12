import React from 'react';

// CartItem : Class based component
class CartItem extends React.Component {   //CartItem will inherit some features from Component class in React package
    
    // STATE : A way to store Local Data for the particualr Component
            // just a JS object 
    constructor () {
        super();     // must call Constructor of the parent class (if we're inheriting somethinf from parent class)

        this.state = {
          price: 999,
          title: 'Mobile Phone',
          qty: 1,
          img: ''
        }

        //Event Handling [Method 2] : ind the value of 'this' to instance of the class in constructor
        // this.increaseQuantity = this.increaseQuantity.bind(this);       
    }

    // increaseQuantity (){
    //     console.log('test');
    //     console.log('this.state', this.state);
    // }
    

    //Event Handling [Method 3] :  Arrow function will automatically bind the value of 'this' to instance of the class 
    increaseQuantity = () => {
        console.log('test');
        console.log('this.state', this.state);
    }

    // For "Class Component" to be a "React Component" --> we need render() method 
    render(){

        //Object Destructuring  
        const { price, title, qty } = this.state;        // destructure the State into JS variables
        
        //return JSX
        return (

            <div className="cart-item">
                
                {/* Left block */}
                <div className="left-block">
                    <img style={styles.image} />
                </div>

                {/* Right block */}
                <div className="right-block">
                {/* <div style={styles.phone}> Mobile Phone </div>         //Method 1 : directly
                    <div style={styles.phone}> {this.state.title} </div>   //Method 2 : get the 'title' form State */}
                    
                    <div style={styles.phone}> {title} </div>           {/*  //Method 3 :  destructure the State into JS variables */}
                    <div style={ {color: '#777'}}> Rs {price}</div>
                    <div style={ {color: '#777'}}> Qty: {qty}</div>

                    {/* Cart Item Actions */}
                    <div className="cart-item-actions">
                        {/* action buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/992/992651.png" 
                            

                            //Handling Events in React  (for more : read pdf)

                            //Method 1
                            // onClick={this.increaseQuantity}  // ERROR  // passing referencce of the func to onclick listener 
                            // onClick={this.increaseQuantity.bind(this)}   //WORKS //bind the value of 'this' to instance of the class here itself

                            //OR Method 2
                            // onClick={this.increaseQuantity}  // + bind the value of 'this' to instance of the class in Constructor 

                            //OR Method 3 (best)
                            onClick={this.increaseQuantity}  // + use ARROW Function (no need to bind)
                        />
                        
                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/128/992/992683.png" 
                        />
                        
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons.flaticon.com/png/128/3405/premium/3405244.png?token=exp=1655045122~hmac=2ff60b817691902f8e0c2eed19ab5c95" 
                        />
                    </div>

                </div>

            </div>
        );
    }
}      

// Since it is JSX, we cannot style elements using CSS styles
// We style elements using JS Objects

const styles = {       //JSON Format (since it is JS object)
    image:{     
        height: 110, //no need to specify px
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    },

    phone:{
        fonSize:25
    }
}


//export the Component
export default CartItem;