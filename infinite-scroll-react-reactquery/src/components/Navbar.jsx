import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav__container">
            <div className="nav__wrapper">
                <Link to="/">
                    <div className="left">
                        <button>Example 1</button>
                    </div>
                </Link>
                <div className="center">
                    <h1 className="title">Infinite-Scroll</h1>
                </div>
                <Link to="/example2">
                    <div className="right">
                        <button>Example 2</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar