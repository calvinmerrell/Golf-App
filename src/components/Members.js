import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './style.css'

const Members = (props) => {
    const [members, setMembers] = useState([])

    useEffect(() => {
        axios.get('/api/members').then((res) => {
            setMembers(res.data)
        })
    }, []);


    return (
        <div className="member-list container">
            <h2 className="member-list-title ">2021 Roster</h2>
            <div className="list-hold container">
                {members.map((user) => (
                    // <Player key={user.id} data={user}/>
                    <div className="row justify-content-start">
                        <div className="col player">
                            <Link className="player-link" to={`/members/${user.user_id}`}>
                                <p>{user.first_name}  {user.last_name}</p>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}
export default Members