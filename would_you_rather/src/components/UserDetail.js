import React,{ Component } from 'react'
import { connect } from 'react-redux'

class UserDetail extends Component {
    render() {
        const {
            name,id,answers,questions
            } = this.props.user

        return(
            <div className='userDetail'>
                <h3>{name}</h3>
                <img src={this.props.user.avatarURL} alt="Smiley face" width='100px'/>
                <p> Asked questions: {questions.length}</p>
                <p> Answered questions: {Object.keys(answers).length}</p>
            </div>
        )
    }
}

function mapStateToProps ({users}, { id }) {
    const user = users[id]

    return {
        user
    }   
}

export default connect(mapStateToProps)(UserDetail)

// User’s name;
// User’s picture;
// Number of questions the user asked; and
// Number of questions the user answered
// Users should be ordered in descending order based on 
// the sum of the number of questions they’ve asked and 
// the number of questions they’ve answered. The more 
// questions you ask and answer, the higher up you move.