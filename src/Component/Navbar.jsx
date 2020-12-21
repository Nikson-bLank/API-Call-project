import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div className="navbar"  >
            <nav >
            <h1 className="nav-brand">STARWAR API CALLS</h1>
                <ul >
                    <li ><Link  to="/films">Films</Link></li>
                    <li ><Link  to="/people">People</Link></li>
                    <li ><Link  to="/planets">Planets</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
