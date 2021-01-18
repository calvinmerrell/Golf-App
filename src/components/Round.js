import React, {useState} from 'react'
import moment from "moment"
import './style.css'
import axios from 'axios'

const Round = (props) => {
    const {round_id,course_name,date,teebox,full18score} = props.data
    const[inputText, SetInputText] = useState('')
    const[showEdit, SetShowEdit] = useState(false)

    function handleSave(){
        const body = {full18score:inputText}
        axios.put(`/api/playerhistory/${props.user_id}/${round_id}`,body).then((res) => {
           props.getHistory()
           SetShowEdit(false)
        })
    } 
    

    return (
        <div className="round">
            
            <p> 
                {moment(date).format("DD/MM/YYYY")} - {course_name} - 
                {teebox}
            </p>
            <div>
                <p > {full18score}</p>
                
                { showEdit ? ( 
                <p><input onChange={(e) => SetInputText(e.target.value)} value={inputText} />
                <button onClick={handleSave}>Save</button></p>):null
                }
            </div>

            <button className="ctrlbuttons" onClick={() => SetShowEdit(true)}> Edit </button>

             <button className="ctrlbuttons" onClick={() => this.props.removeScore(this.props.courses.history_id)}>Remove </button>         
           
        </div>
    )
    }

export default Round