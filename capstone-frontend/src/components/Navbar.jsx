import React from 'react'
import { NavLink } from 'react-router';
import { useCartStore } from '../store/CartStore';
import '../styles/navbar.css';

const Navbar = () => {
  const { items } = useCartStore();
  
  const totalPrice = items?.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalQuantity = items?.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar navbar-dark bg-dark shadow-sm px-3">
      {/* Brand */}
      <h1 className="navbar-brand m-0 fw-bold fs-3">Capstone</h1>

      {/* Links */}
      <section className="nav-links-container d-flex align-items-center gap-3 ms-auto">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>

        {/* Cart link with item count and total price */}
        <NavLink to="/cart" className="btn btn-outline-light">
          Cart ({totalQuantity ?? 0}) - ${totalPrice?.toFixed(2) ?? "0.00"}
        </NavLink>

        {/* Add more links below if needed */}
        {/* <NavLink to="/about" className="nav-link">About</NavLink> */}
      </section>
    </nav>
  );
  };

export default Navbar;