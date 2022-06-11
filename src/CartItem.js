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
                        <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992651.png" />
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992683.png" />
                        <img alt="delete" className="action-icons" src="https://cdn-icons.flaticon.com/png/128/3405/premium/3405244.png?token=exp=1654977804~hmac=7969371619084045de3756468d73dbd6" />
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