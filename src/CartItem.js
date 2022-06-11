import React from 'react';

// CartItem : Class based component
class CartItem extends React.Component {
    
    render(){
        
        return (

            <div className="cart-item">
                
                {/* Left block */}
                <div className="left-block">
                    <img style={styles.image} />
                </div>

                {/* Right block */}
                <div className="right-block">
                    <div style={styles.phone}> Phone </div>
                    <div style={ {color: '#777'}}> Rs 999</div>
                    <div style={ {color: '#777'}}> Qty: 1</div>

                    {/* Cart Item Actions */}
                    <div className="cart-item-actions">
                        {/* action buttons */}

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