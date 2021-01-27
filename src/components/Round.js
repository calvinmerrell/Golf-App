import React, { useState } from 'react'
import moment from "moment"
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import './style.css'

const Round = (props) => {
    const { round_id, course_name, date, teebox, full18score } = props.data
    const [inputText, SetInputText] = useState('')
    const [showEdit, SetShowEdit] = useState(false)

    function handleSave() {
        const body = { full18score: inputText }
        axios.put(`/api/playerhistory/${props.user_id}/${round_id}`, body).then((res) => {
            props.getHistory()
            SetShowEdit(false)
        })
    }

    function handleDelete() {
        axios.delete(`/api/playerhistory/${props.user_id}/${round_id}`)
        .then((res) => {props.getHistory()
            }
        )
    }


    return (
        <div className="round row">
            
            <div className="col-2">
                {moment(date).format("DD/MM/YYYY")} </div>

            <div className="col-3">{course_name}</div>
            <div className="col-2">{teebox}</div>


            <div className="col-2">{full18score}</div>

            { showEdit ? (
                <p><input onChange={(e) => SetInputText(e.target.value)} value={inputText} />
                    <button onClick={handleSave}>Save</button></p>) : null
            }

            <Button variant="primary" className="ctrlbuttons" onClick={() => SetShowEdit(true)}> Edit </Button>

            <Button variant="primary" className="ctrlbuttons" onClick={() => handleDelete()}>Remove </Button>

        </div>
    )
}

export default Round