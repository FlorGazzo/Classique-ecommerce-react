import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div>
            <h1>Classique</h1>
            <ul>
                <button>Home</button>
                <button>Products</button>
                <button>Contact</button>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar;