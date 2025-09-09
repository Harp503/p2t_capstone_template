import React from 'react';
import { useCartStore } from '../store/CartStore';

function Cart() {
  const items = useCartStore(state => state.items);
  const removeItem = useCartStore(state => state.removeItem);
  const updateQuantity = useCartStore(state => state.updateQuantity);
  const clearCart = useCartStore(state => state.clearCart);

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

if (items.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div>
        <h2>Cart</h2>
      <button onClick={clearCart}>Clear Cart</button>
      <ul>
        {items.map(item => (
          <li key={item.id} style={{ marginBottom: "1rem"}}>
            <img src={item.image} alt={item.name} width={50} height={50} />
            <span>{item.name} - ${item.price}</span>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={e => updateQuantity(item.id, Number(e.target.value))}
              style={{ width: "50px", marginLeft: "1rem" }}
            />
            <button onClick={() => removeItem(item.id)} style={{ marginLeft: "1rem", color: "red" }}>
              Remove
            </button>
        </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;

 