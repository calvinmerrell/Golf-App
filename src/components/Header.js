import React, {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import './style.css'

const Header = (props) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    

    const handleLogin=()=>{
        setMessage("")
        const body = {
            username: username,
            password: password
        }
        axios.post('/auth/login',body).then(
            (res) => {
              console.log(res.data)
              setUsername("")
              setPassword("")
              setMessage(username)
            })
            .catch(() => {
                setMessage("Credentials don't match")
            }) 
    }
    const handleLogout = () =>{
        axios.delete('/auth/logout').then(
            (res) => {
                setMessage("Good Bye")
            }
        )
    }

    return (
        <header> 
            <h1>REPEAT GOLF LEAGUE</h1>
            <nav className = "nav-list">
                <ul> 
                    <Link to='/'>
                        <li>Home</li>
                    </Link>

                    <Link to='/Members'>
                        <li>Members</li>
                    </Link>

                    <Link to='/weeklygames'>
                        <li>Weekly Games</li>
                    </Link>

                    <Link to='/postscore'>
                        <li>Post Score</li>
                    </Link>
                </ul>
                
                <input value={username} className="loginInputs" placeholder="username" onChange={(e)=> setUsername(e.target.value)}></input>

                <input value={password} className="loginInputs" placeholder="password" onChange={(e)=> setPassword(e.target.value)}></input>

                <p>
                    {message}
                </p>

                <button onClick={handleLogin}>Log in</button>
                
                <button onClick={handleLogout}>Log out</button>
                
                <Link to='/register'>
                    <p>Register</p>
                </Link>
                
            </nav>
        </header>
    )
}
export default withRouter(Header)