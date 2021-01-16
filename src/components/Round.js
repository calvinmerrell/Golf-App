import React from 'react'
import './style.css'

const Round = (props) => {
    const {round_id,course_name,date,teebox,full18score} = props.data

    
    return (
        <div className="round">
            
            <p> {round_id} {course_name} {date} {teebox} {full18score}</p>
            
        </div>
    )
}
export default Round