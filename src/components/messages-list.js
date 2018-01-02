import React, { Component}  from 'react';

export default class UserMessagesList extends Component {
    sendNewMessage(msg='') {
        let message = msg.trim();

        if (message.length !== 0) {
            const fullMessage = {
                id: `${ this.props.activeUser.id }_${ Date.now() }`,
                senderId: 0,
                receiverId: this.props.activeUser.id,
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

    render() {
        return (            
            <div className="right">
                    <div className="top">
                        <span>To: <span className="name">{ this.props.activeUser.name }</span></span>
                    </div>
                    <div className="chat active-chat" data-chat="person6">
                        <div className="conversation-start">
                            <span>Monday, 1:27 PM</span>
                        </div>
                            { this.props.activeMessages.map(message => {
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