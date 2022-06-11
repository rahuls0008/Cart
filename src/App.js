import React from 'react';

//Import the Components
import CartItem from './CartItem';  



// Function based Component
function App() {
  return (
    <div className="App">
      <h1> Cart</h1>
      <CartItem />     {/*add CartItem component */}
    </div>
  );
}

export default App;
