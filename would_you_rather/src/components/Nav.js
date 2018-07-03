import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleChangeUser } from '../actions/authedUser'


class Nav extends Component {
    
    handleClick = (e) => {
        e.preventDefault()
        this.props.dispatch(handleChangeUser(null))
    }
    
    render () {
        return(
            <nav className='nav'>
                <ul>         
                    <li className='authedUser'>
                    Logged-in user: {this.props.authedUser}
                    </li>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink to='/add' exact activeClassName='active'>
                                New Poll
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink to='/leaderboard' exact activeClassName='active'>
                                Leaderboard
                        </NavLink>
                    </li>
                    <li>
                        <button onClick={this.handleClick}>
                            logout
                        </button>
                    </li>

                </ul>
            </nav>
    )
}

}

function mapStateToProps ({authedUser}) {

    return {
        authedUser
    }   
}

export default connect(mapStateToProps)(Nav)