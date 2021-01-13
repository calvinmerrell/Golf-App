import axios from 'axios'
import React, {useState, useEffect} from 'react'
import React, {Component} from 'react'

import './style.css'

const Rounds = (props) => {
    const[rounds,setRounds] = useState([])

    useEffect(() => {
        axios.get('/api/rounds').then((res) => {
            setRounds(res.data)
        })
    }, [])
}

class PlayerHistory extends Component {
    constructor() {
        super()
        this.state = {
            users: {},
            rounds: {}
        }
    }

    componentDidMount(){
        this.getMember()
    }

    componentDidUpdate(prevProps){
        const {id} = this.props.match.params
        if(prevProps.match.params.id !== id){
            this.getMember()
        }
    }

    getMember = () =>{
        const {id} = this.props.match.params
        axios.get(`/api/members/${id}`)
        .then((res) => {
            this.setState({
                users: res.data,
            })
        }) 
        .catch((err) => {
            this.props.history.push('/404')
        })
    }


    render(){
    return(
        <div className="single-member">
            <h2>
                {this.state.users.first_name}' '{this.state.users.last_name}
            </h2>
            <div className="list-hold">
                {playerHistory.map((round) => (
                    <Rounds key={round.id} data={round}/>
                ))}
            </div>
        </div>
    )
    }
}
export default PlayerHistory