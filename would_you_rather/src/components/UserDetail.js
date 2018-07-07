import React,{ Component } from 'react'
import { connect } from 'react-redux'

class UserDetail extends Component {
    render() {
        const {
            name,answers,questions
            } = this.props.user

        return(
            <div className='userDetail'>
                <h3>{name}</h3>
                <img src={this.props.user.avatarURL} alt="avatar of the user" width='100px'/>
                <p> Asked questions: {questions.length}</p>
                <p> Answered questions: {Object.keys(answers).length}</p>
            </div>
        )
    }
}

function mapStateToProps ({users}, {id}) {
    const user = users[id]

    return {
        user
    }   
}

export default connect(mapStateToProps)(UserDetail)
