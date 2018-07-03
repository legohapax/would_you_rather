import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleChangeUser}  from '../actions/authedUser'

class Login extends Component {
    
    
    handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        this.props.dispatch(handleChangeUser(e.target.value))
    }
    
    render() {
        return(
            <div>
                <h2>Login</h2>
                <select onChange={this.handleChange}>
                    <option disabled selected> Choose a user</option>
                    <option value="sarahedo">sarahedo</option>
                    <option value="johndoe">johndoe</option>
                    <option value="tylermcginnis">tylermcginnis</option>
                </select>
            </div>
        )
    }
}

export default connect()(Login)