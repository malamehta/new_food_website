import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <section className='footer'>
            <div className='footer-links'>
                <NavLink to={"/cuisine/French"} className='link'>
                    <h3 className='name'>French</h3>
                </NavLink>
                <NavLink to={"/cuisine/European"} className='link'>
                    <h3 className='name'>European</h3>
                </NavLink>
                <NavLink to={"/cuisine/British"} className='link'>
                    <h3 className='name'>British</h3>
                </NavLink>
                <NavLink to={"/cuisine/African"} className='link'>
                    <h3 className='name'>African</h3>
                </NavLink>
            </div>
            <div className='footer-links'>
                <NavLink to={"/cuisine/Italian"} className='link'>
                    <h3 className='name'>Italian</h3>
                </NavLink>
                <NavLink to={"/cuisine/American"} className='link'>
                    <h3 className='name'>American</h3>
                </NavLink>
                <NavLink to={"/cuisine/Thai"} className='link'>
                    <h3 className='name'>Thai</h3>
                </NavLink>
                <NavLink to={"/cuisine/Chinese"} className='link'>
                    <h3 className='name'>Chinese</h3>
                </NavLink>
            </div>
            <div className='footer-links'>
                <NavLink to={"/cuisine/Indian"} className='link'>
                    <h3 className='name'>Indian</h3>
                </NavLink>
                <NavLink to={"/cuisine/Southern"} className='link'>
                    <h3 className='name'>Southern</h3>
                </NavLink>
                <NavLink to={"/cuisine/Spanish"} className='link'>
                    <h3 className='name'>Spanish</h3>
                </NavLink>
                <NavLink to={"/cuisine/Mediterranean"} className='link'>
                    <h3 className='name'>Mediterranean</h3>
                </NavLink>
            </div>

        </section>
    )
}

export default Footer