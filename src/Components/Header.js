import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitcher from '../assets/header/theme-switch.png'

function Header() {
    return (
        <div className='header'>
            <div className='logoContainer'>
            <img src={punkLogo} className='punkLogo'/>
            </div>
            <div className='searchBar'>
                <div className='searchIcon'>
                    <img src={searchIcon}/>
                </div>
                <input className='searchInput' placeholder='Collection, Items or User'/>
            </div>
            <div className='headerItems'>
                 <p>Drops</p>
                 <p>Marketplace</p>
                 <p>Create</p>
            </div>
            <div className='headerActions'>
                <div className='themeSwitcher'>
                    <img src={themeSwitcher}/>
                </div>
            </div>
            <div className='loginButton'>
                Get In
            </div>
        </div>
    )
}

export default Header
