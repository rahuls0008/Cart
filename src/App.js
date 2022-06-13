import React from 'react';

//Import the Components
import CartItem from './CartItem'; 
import Cart from './Cart';  
import NavBar from './NavBar'; 



// Function based Component
function App() {
  return (
    
    <div className="App">
      <NavBar />
      <Cart />         {/* Render Cart component */}
    </div>
  );
}

export default App;
