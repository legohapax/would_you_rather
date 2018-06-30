import { _saveQuestionAnswer } from '../utils/_DATA'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function receivePolls (polls) {
    return {
        type: RECEIVE_POLLS,
        polls
    }
}
// has liked chybí
function saveQuestionAnswer ({id, authedUser, option}) {
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