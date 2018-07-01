import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/polls'
import { Redirect } from 'react-router-dom'

class NewPoll extends Component {
    state = {
        textOptionOne: '',
        textOptionTwo: '',
        toHome: false
    }
    handleChange = (e) => {
        console.log('1: ' ,this.state.textOptionOne, '2: ', this.state.textOptionTwo)
        if (e.target.id === 'optionOne') {
            const textOptionOne = e.target.value
            this.setState(()=>({
                textOptionOne
            }))
        } else {
            const textOptionTwo = e.target.value
            this.setState(()=>({
                textOptionTwo
            }))
        }
        //console.log('1: ' ,this.state.textOptionOne, '2: ', this.state.textOptionTwo)        
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { textOptionOne,textOptionTwo } = this.state
        const { dispatch } = this.props
        console.log(textOptionOne,textOptionTwo)
        
        dispatch(handleSaveQuestion(textOptionOne,textOptionTwo))

        this.setState(()=>({
            textOptionOne: '',
            textOptionTwo: '',
            toHome: true
        }))
     
    }

    render () {
        const { textOptionOne,textOptionTwo } = this.state

        if (this.state.toHome === true) {
            return <Redirect to='/'/>
        }

        return(
            <div>
                <h3>
                    Compose new poll
                </h3>
                <form onSubmit={this.handleSubmit}>
                    <textarea
                        id='optionOne'
                        placeholder='Option one goes here:'
                        value={textOptionOne}
                        onChange={this.handleChange}
                    />
                    <textarea
                        id='optionTwo'
                        placeholder='Option two goes here:'
                        value={textOptionTwo}
                        onChange={this.handleChange}
                    />
                    <button 
                        type='submit'
                        disabled={textOptionOne === '' || textOptionTwo === ''}
                    >
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default connect()(NewPoll)