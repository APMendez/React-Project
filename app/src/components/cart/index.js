import React from 'react'
import './styles.css'
import { NavLink } from 'react-router-dom'

function CartWidget({amount}) {
    return (
        <NavLink to= "/cart">
            <div className='cart'>
            {amount}
            </div>
        </NavLink>
        
    )
}

export default CartWidget