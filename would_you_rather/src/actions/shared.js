import {receivePolls} from './polls'
import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_ID = 'johndoe'

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
            .then(({users,polls}) => {
                dispatch(receivePolls(polls))
                dispatch(receiveUsers(users))
                dispatch(setAuthedUser(AUTHED_ID))
                //console.log('initdata: ', polls, users)
                
            }   
    )
}

}