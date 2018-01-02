import React, { Component}  from 'react';

export default class UserMessagesList extends Component {
    constructor(props) {
        super(props);
        this.activeMessages = this.filterMessages(props.messages, props.activeUser);
    }

    filterMessages(array, userId) {
        return array.filter(message => { return message.senderId === userId || message.receiverId === userId});
    }

    sendNewMessage(msg='') {
        let message = msg.trim();

        if (message.length !== 0) {
            const fullMessage = {
                id: `${ this.props.activeUser }_${ Date.now() }`,
                senderId: 0,
                receiverId: this.props.activeUser,
                text: message
            };

            this.props.addNewMessage(fullMessage);
            this.messageInput.value = '';
        } else {
            return false
        }

    }

    enterKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.sendNewMessage(this.messageInput.value);
        }
    }

    getActiveUserInfo() {
        const findArray = this.props.usersInfo.filter((userObj) => { 
            return userObj.id === this.props.activeUser
        });

        return findArray.length > 0 ? findArray[0] : { }
    }

    componentWillReceiveProps(nextProps) {
            this.activeMessages = this.filterMessages(nextProps.messages, nextProps.activeUser);
    }

    render() {
        const activeUserInfo = this.getActiveUserInfo();

        return (            
            <div className="right">
                    <div className="top">
                        <span>To: <span className="name">{ activeUserInfo.name }</span></span>
                    </div>
                    <div className="chat active-chat" data-chat="person6">
                        <div className="conversation-start">
                            <span>Monday, 1:27 PM</span>
                        </div>
                            { this.activeMessages.map(message => {
                               return ( 
                                    <div className={ 'bubble ' + (message.senderId  === 0 ? 'me' : 'you')} key={ message.id }>
                                        <div>{ message.text }</div>
                                    </div>
                                )
                            }) }

                </div> 

                <div className="write">
                    <input type="text" ref={(input={value: ''}) => { this.messageInput = input }} onKeyPress={ this.enterKeyPress.bind(this) }/>
                    <a className="write-link send" onClick={ (message) => this.sendNewMessage(this.messageInput.value) }></a>
                </div>
            </div>
        )   
     }
};