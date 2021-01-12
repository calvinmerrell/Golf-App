import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const Header = (props) => {
    return (
        <header> 
            <h1>REPEAT GOLF LEAGUE</h1>
            <nav className = "nav-list">
                <ul> 
                    <Link to='/'>
                        <li>Home</li>
                    </Link>

                    <Link to='/players'>
                        <li>Players</li>
                    </Link>

                    <Link to='/playerhistory'>
                        <li>Player History</li>
                    </Link>

                    <Link to='/weeklygames'>
                        <li>Weekly Games</li>
                    </Link>

                    <Link to='/postscore'>
                        <li>Post Score</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}
export default Header