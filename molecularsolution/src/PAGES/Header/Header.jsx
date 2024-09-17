import React from 'react'
import Logo from './Logo.svg'
import Product from '../Products/Product'
import './header.css'

export default function Header() {
  return (
    <>
        <div className='header'>
            <div className='logo'>
                <img src={Logo} alt="" />
            </div>
            <div className='nav-bar'>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>LeaderShip</li>
                    <li>Advisory Board</li>
                    <li>Contact us</li>
                </ul>
            </div>
        </div>
        <div>
            <Product />
        </div>
    </>
  )
}
