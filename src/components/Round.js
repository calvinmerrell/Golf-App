import React from 'react'
import './style.css'

const Round = (props) => {
    const {id,course_name,date,full18score} = props.data

    
    return (
        <div className="round">
            
            <p> {course_name} {date} {full18score}</p>
            
        </div>
    )
}
export default Round