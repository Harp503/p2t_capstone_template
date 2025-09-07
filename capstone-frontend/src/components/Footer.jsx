import React from 'react'
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='footer'>
      <h4>Footer (c) {currentYear}</h4>
    </footer>
  )
}

export default Footer