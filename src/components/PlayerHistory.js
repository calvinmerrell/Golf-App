import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Round from './Round'
import './style.css'

const PlayerHistory = (props) => {
    const[rounds,setRounds] = useState([])

    useEffect(() => {
        axios.get(`/api/members/${props.match.params.user_id}`).then((res) => {
            setRounds(res.data)
        })
    }, [])

    
        return(
            <div className="single-member">
            <h2>
                Player History
            </h2>
            <div className="list-hold">
                {rounds.map((round) => (
                    <Round key={round.round_id} data={round}/>
                ))}
            </div>
        </div>
    )
}
export default PlayerHistory