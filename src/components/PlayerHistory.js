import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Round from './Round'
import './style.css'

const PlayerHistory = (props) => {
    const[rounds,setRounds] = useState([])

    useEffect(() => {
        console.log(props.match.params.id)
        axios.get(`/api/members/${props.match.params.id}`).then((res) => {
            setRounds(res.data)
        })
    }, [])

    // render(){
        return(
            <div className="single-member">
            <h2>
                Player History
            </h2>
            <div className="list-hold">
                {rounds.map((round) => (
                    <Round key={round.id} data={round}/>
                ))}
            </div>
        </div>
    )
    
}
// class PlayerHistory extends Component {
//     constructor() {
//         super()
//         this.state = {
//             users: {},
//             rounds: {}
//         }
//     }

//     componentDidMount(){
//         this.getMember()
//     }

//     componentDidUpdate(prevProps){
//         const {id} = this.props.match.params
//         if(prevProps.match.params.id !== id){
//             this.getMember()
//         }
//     }

//     getMember = () =>{
//         const {id} = this.props.match.params
//         axios.get(`/api/members/${id}`)
//         .then((res) => {
//             this.setState({
//                 users: res.data,
//             })
//         }) 
//         .catch(err => {
//             this.props.history.push('/404')
//         })
//     }
export default PlayerHistory