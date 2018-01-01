import React, { Component } from 'react'
import UserList from './user-list'
import MessagesList from './messages-list'

export default class Chat extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <UserList></UserList>
                    <MessagesList></MessagesList>
                </div>
            </div>
        )
    }
}