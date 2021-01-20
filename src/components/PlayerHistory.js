import React, {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import Round from './Round'

import './style.css'

const PlayerHistory = (props) => {
    const[rounds,setRounds] = useState([])
    
    const getHistory = useCallback(function () {
        axios.get(`/api/members/${props.match.params.user_id}`).then((res) => {
            setRounds(res.data)
        })
    },[props.match.params.user_id])

    useEffect(() => {
        getHistory()
    }, [getHistory])

        return(
            <div className="single-member">
            <h2>
                Player History
            </h2>
            <div className="container">
                {rounds.map((round) => (
                    <Round getHistory={getHistory} key={round.round_id} data={round} 
                    user_id={props.match.params.user_id}/>
                ))}
            </div>
        </div>
    )
}
export default PlayerHistory