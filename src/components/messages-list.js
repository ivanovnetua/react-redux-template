import React, { Component}  from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addNewMessageAction } from '../actions/actions';

class UserMessagesList extends Component {
    sendNewMessage(msg='') {
        let message = msg.trim();

        if (message.length !== 0) {
            const fullMessage = {
                id: Date.now(),
                text: message,
                author: 'me'
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
                    <div className="top"><span>To: <span className="name">Dog Woofson</span></span></div>
                    <div className="chat active-chat" data-chat="person6">
                        <div className="conversation-start">
                            <span>Monday, 1:27 PM</span>
                        </div>
                            { this.props.messages.map(message => {
                               return ( 
                                    <div className={ 'bubble ' + (message.author === 'me' ? 'me' : 'you')} key={ message.id }>
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

const mapStateToProps = (state) => {
    return {
        messages: state.addMessages.messages
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: bindActionCreators(addNewMessageAction, dispatch)
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(UserMessagesList);