import React from 'react';

//Import the Components
import CartItem from './CartItem'; 
import Cart from './Cart';  



// Function based Component
function App() {
  return (
    <div className="App">
      <Cart />         {/* Render Cart component */}
    </div>
  );
}

export default App;
