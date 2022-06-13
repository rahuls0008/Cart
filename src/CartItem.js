import React from 'react';

// // CartItem : Class based component
// class CartItem extends React.Component {   //CartItem will inherit some features from Component class in React package
    
//     // STATE : A way to store Local Data for the particualr Component
//     // just a JS object 
//     constructor () {
//         super();     // must call Constructor of the parent class (if we're inheriting somethinf from parent class)
        
//         this.state = {
//             price: 999,
//             title: 'Mobile Phone',
//             qty: 1,
//             img: ''
//         }
        
//         //Event Handling [Method 2] : ind the value of 'this' to instance of the class in constructor
//         // this.increaseQuantity = this.increaseQuantity.bind(this);   
        
//         // for react version < 17
//         // this.testing();      //testing setState outside Event Handler - No Batching | Synchronous unlinke in Event handler
//     }
    
    
//     // testing () {   //for react version < 17
//     //     const promise = new Promise((resolve, reject) => {
//     //         setTimeout(() => {
//     //             resolve('done');
//     //         }, 5000);
//     //     })
        
//     //     promise.then(() => {
//     //         // setState acts like a SYNCHRONOUSE call
//     //         this.setState({ qty: this.state.qty + 10 });   //First this is called and Rendered
            
//     //         this.setState({ qty: this.state.qty + 10 });   //the this is called and Rendered
            
//     //         this.setState({ qty: this.state.qty + 10 });    //then this is called and Rendered

//     //         //NO BATCHING :  Rendered 3 Times
            
//     //         console.log('state', this.state);
//     //     });
//     // }
    
//     // increaseQuantity (){
//     //     console.log('test');
//     //     console.log('this.state', this.state);
//     // }
    
    
//     //Event Handling [Method 3] :  Arrow function will automatically bind the value of 'this' to instance of the class 
//     increaseQuantity = () => {
//         // console.log('test');
//         // console.log('this.state', this.state);
        
//         //Managing State
//         // this.state.qty += 1;     //NOT UPDATED ON PAGE : qty is updates but page is not rendered 
        
//         // calling setState, we can trigger re-rendering of component with the updated value 
        
//         // -------------        setState FORM 1 :  (by giving it an object)  ---------------//
//         // this.setState({
//         //     qty: this.state.qty + 1
//         // });
        
//         // this.setState({
//         //     qty: this.state.qty + 1
//         // });
        
//         // this.setState({
//         //     qty: this.state.qty + 1
//         // });
        
//         //BATCHING : In Event Handler React merges all setState calls into One single setState call & that's why our componnet is rendered once - To make website efficient - takes the last call 
//         //Form 1 : Quanity will only be increased by 1 despite calling setState 3 Times -  renderen only once Last call
//         //Form 2 : Quanity will be increased by 3 Times here but page will only be Rendered once
        
//         //Note(for react version < 17) : Outside Event Handler, React does not perform Batching  
//         // i.e React calls Re-Render everytime setState is called & 
        
        
        
//         // -------------        setState FORM 2 - (by passing the callback function)   -------------//
//         // use when we require the prev state 
//         // this.setState((prevState) => {     // React will call the func internally with prevState to it.
//         // //return the object
//         //     return {
//         //         qty: prevState.qty + 1
//         //     }
//         // });
        
//         // console.log('this.state', this.state);     //may be executed before quantity has neen increase
//         //setState is ASYNCHRONOUS Function
//         //if we want this action after the quantity has been increased then we use following method
        
//         this.setState((prevState) => {     // React will call the func internally with prevState to it.
//             //return the object
//             return {
//                 qty: prevState.qty + 1
//             }
//         }, () => {                                    //setState is ASYNCHRONOUS Function
//             console.log('this.state', this.state);    //similar to .then  - will be executed once the above action is complete
//         });
//     }
    
    
    
    
    
//     // decreaseQuantity Handler
//     decreaseQuantity = () => {
//         const { qty } = this.state;   //object destructuring
        
//         if (qty === 0) {
//             return;  //do nothing
//         }
//         // setState form 2 - if prevState required use this
//         this.setState((prevState) => {
//             return {
//                 qty: prevState.qty - 1
//             }
//         });
//     }
    
//     // For "Class Component" to be a "React Component" --> we need render() method 
//     render(){
//         console.log('render');
        
//         //Object Destructuring  
//         const { price, title, qty } = this.state;        // destructure the State into JS variables
        
//         //return JSX
//         return (
            
//             <div className="cart-item">
            
//             {/* Left block */}
//             <div className="left-block">
//             <img style={styles.image} />
//             </div>
            
//             {/* Right block */}
//             <div className="right-block">
//             {/* <div style={styles.phone}> Mobile Phone </div>         //Method 1 : directly
//         <div style={styles.phone}> {this.state.title} </div>   //Method 2 : get the 'title' form State */}
        
//         <div style={styles.phone}> {title} </div>           {/*  //Method 3 :  destructure the State into JS variables */}
//         <div style={ {color: '#777'}}> Rs {price}</div>
//         <div style={ {color: '#777'}}> Qty: {qty}</div>
        
//         {/* Cart Item Actions */}
//         <div className="cart-item-actions">
//         {/* action buttons */}
//         <img 
//         alt="increase" 
//         className="action-icons" 
//         src="https://cdn-icons-png.flaticon.com/128/992/992651.png" 
        
        
//         //Handling Events in React  (for more : read pdf)
        
//         //Method 1
//         // onClick={this.increaseQuantity}  // ERROR  // passing referencce of the func to onclick listener 
//         // onClick={this.increaseQuantity.bind(this)}   //WORKS //bind the value of 'this' to instance of the class here itself
        
//         //OR Method 2
//         // onClick={this.increaseQuantity}  // + bind the value of 'this' to instance of the class in Constructor 
        
//         //OR Method 3 (best)
//         onClick={this.increaseQuantity}  // + use ARROW Function (no need to bind)
//         />
        
//         <img 
//         alt="decrease" 
//         className="action-icons" 
//         src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
//         onClick={this.decreaseQuantity} 
//         />
        
//         <img 
//         alt="delete" 
//         className="action-icons" 
//         src="https://cdn-icons.flaticon.com/png/128/3405/premium/3405244.png?token=exp=1655045122~hmac=2ff60b817691902f8e0c2eed19ab5c95" 
//         />
//         </div>
        
//         </div>
        
//         </div>
//         );
//     }
// }      






//------------------------------------              using props from Parent Component(Cart) --------------------//



    // Since State is defined in parent Cart Component (not here) 
        // 1. we cannot use setState here for Event Handling.    //Handle events in Cart component & pass it through props
        // 2. we do not need class based component. Hence, Function based component.



// CartItem : Class based component (Function based component will work fine here    )
class CartItem extends React.Component {   //CartItem will inherit some features from Component class in React package
    

    // Since State is defined in parent Cart Component (not here) 
        // 1. we cannot use setState here for Event Handling.    //Handle events in Cart component & pass it through props
        // 2. we do not need class based component. Hence, Function based component.

 
    // For "Class Component" to be a "React Component" --> we need render() method 
    render(){
        console.log('render');
        
        //Object Destructuring 
        // const { price, title, qty } = this.state;        // destructure the State into JS variables
        
        const {price, title, qty} = this.props.product;   //this.props :  will have everything that is passed as props from parent Cart Component (see Cart component)
                                                  //this.props.product : will have products array (see Cart component where <CartItem/> is passsed)
                                                    //NOT this.props.productS
        
        // Destructuring this.props 
        const {product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct} = this.props;                                            
                    // so that we won't have to type "this.props.onIncreaseQuantity" or "this.props.products"
                                               // just "onIncreaseQuantity" or "products"  DIRECTLY

        //return JSX
        return (
            
            <div className="cart-item">
            
            {/* Left block */}
            <div className="left-block">
            <img style={styles.image} src={product.img} />
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
        // onClick={this.increaseQuantity}  // + use ARROW Function (no need to bind)

        // OR Method 4 : get the Event Handler through props (passed from parent component (CART) 
        onClick={() => this.props.onIncreaseQuantity(this.props.product)}   //don't pass the reference here - CALL THE FUNCTION
                                                                            //onClick this function will be called && then this called func will call onIncreaseQuantity function from props
        // OR DIRECTLY using Object Destructuring
        // onClick={() => onIncreaseQuantity(product)}
        />
        
        <img 
        alt="decrease" 
        className="action-icons" 
        src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
        // onClick={this.decreaseQuantity} 
        // onClick={() => this.props.onDecreaseQuantity(this.props.product)}
        onClick={() => onDecreaseQuantity(product)}
        />
        
        <img 
        alt="delete" 
        className="action-icons" 
        src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" 
        onClick={() => onDeleteProduct(product.id)}
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