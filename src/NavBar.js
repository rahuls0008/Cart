import React from 'react';




// NavBar : Function based component (since it does not have State)

// function NavBar = (props) => {   //React will pass PROPS by default here
                                                // can directly access "props.something"

//OR

const NavBar = (props) => {     //React will pass PROPS by default here
                                        // can directly access "props.something"

    // For "Functional Component" --> No Need render() method 
    return(
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png" alt='cart icon' />
                <span style={styles.cartCount}> {props.count} </span>
            </div>
        </div>

    );

        
}
      




const styles = {   //JSON Format (since it is JS object)
    cartIcon: {
      height: 32,
      marginRight: 20
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: -9
    }
  };


//export the Component
export default NavBar;