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
                    <UserList 
                        users={ this.props.users } 
                        changeActiveUser={ this.props.changeActiveUser }
                        addNewUser={ this.props.addNewUser }
                    ></UserList>

                    <MessagesList
                        addNewMessage={ this.props.addNewMessage } 
                        activeUser={ this.props.activeUser }
                        activeMessages = { this.props.messages }
                    ></MessagesList>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const activeMessages = state.addMessages.messages.filter(message => { 
        return message.senderId === state.changeUser.activeUser.id || message.receiverId === state.changeUser.activeUser.id
    });

    return {
        users: state.addUsers.users,
        activeUser: state.changeUser.activeUser,
        messages: activeMessages
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