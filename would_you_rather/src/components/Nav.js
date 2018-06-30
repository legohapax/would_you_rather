import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'


class Nav extends Component {
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
                        <NavLink to='/new' exact activeClassName='active'>
                                New Poll
                        </NavLink>
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