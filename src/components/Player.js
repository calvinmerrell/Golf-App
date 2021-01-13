import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

const Player = (props) => {
    const {id,first_name,last_name} = props.data
    return (
        <div className="player">
            <Link to ={`/members/${id}`}>
            <p>{first_name}  {last_name}</p>
            </Link>
        </div>
    )
}
export default Player