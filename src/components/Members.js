import React, {useState, useEffect} from 'react'
import Player from './Player'
import axios from 'axios'
import './style.css'

const Members = (props) => {
    const [members, setMembers] = useState([])

    useEffect(() => {
        axios.get('/api/members').then((res) => {
            setMembers(res.data)
        })
    }, []);


    return(
        <div className="member-list">
            <h2 className="member-list-title">MEMBERS</h2>
            <div className="list-hold">
                {members.map((player) => (
                    <Player key={player.id} data={player}/>
                ))}
            </div>
        </div>

    )
}
export default Members