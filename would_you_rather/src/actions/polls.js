import { _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const ADD_POLL = 'ADD_POLL'


function addPoll(poll) {
    return {
        type: ADD_POLL,
        poll
    }
}

export function handleSaveQuestion(optionOneText,optionTwoText) {
    return (dispatch,getState) =>  {
        const { authedUser } = getState()
        const author = authedUser
        
        return _saveQuestion({optionOneText,optionTwoText,author})
            .then((poll) => dispatch(addPoll(poll)))
    }

}


export function receivePolls(polls) {
    return {
        type: RECEIVE_POLLS,
        polls
    }
}

function saveQuestionAnswer({id, authedUser, option}) {
    return {
        type: SAVE_QUESTION_ANSWER,
        id,
        authedUser,
        option
    }

}

export function handleSaveQuestionAnswer (info) {
    return (dispatch) => {
        
        dispatch(saveQuestionAnswer(info))
        
        return _saveQuestionAnswer(info)
            .catch((e)=>{
                console.warn('error in hadnel poll: ', e)
                dispatch(saveQuestionAnswer(info))
                alert('There was an error answering the poll. Try again.')
            })
    

    }
}