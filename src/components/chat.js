import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserList from './user-list'
import MessagesList from './messages-list'
import { addNewUserAction, changeUserAction, addNewMessageAction } from '../actions/actions'

class Chat extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <UserList users={ this.props.users } changeActiveUser={ this.props.changeActiveUser } addNewUser={ this.props.addNewUser }></UserList>
                    <MessagesList messages={ this.props.messages } addNewMessage={ this.props.addNewMessage } usersInfo={ this.props.users } activeUser={ this.props.activeUser }></MessagesList>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.addUsers.users,
        activeUser: state.changeUser.activeUser,
        messages: state.addMessages.messages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewUser: bindActionCreators(addNewUserAction, dispatch),
        changeActiveUser: bindActionCreators(changeUserAction, dispatch),
        addNewMessage: bindActionCreators(addNewMessageAction, dispatch)
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);