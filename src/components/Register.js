import React, {useState} from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import './style.css'

const Register = (props)=> {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')

    const handleRegister =() => {
        const body = {
            username: username,
            password: password,
            first_name: first_name,
            last_name: last_name
        }
        axios.post('/auth/register',body).then(
            (res) => {
              console.log(res.data)
            }
        )
    }

return(
    <div> 
        <input className="registrationInputs" placeholder="Username" onChange={(e)=> setUsername(e.target.value)}></input>

        <input className="registrationInputs" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}></input>

        <input className="registrationInputs" placeholder="First Name" onChange={(e)=> setFirst_name(e.target.value)}></input>

        <input className="registrationInputs" placeholder="Last Name" onChange={(e)=> setLast_name(e.target.value)}></input>


<button onClick={handleRegister}>Register</button>
    </div>
)
}
export default withRouter(Register)