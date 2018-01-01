import React, { Component}  from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addNewMessageAction } from '../actions/actions'

class UserMessagesList extends Component {
    getRandomMessage() {
        return {
            id: Date.now(),
            sender: `user-${ Date.now() }`,
            text: `hello-${ Date.now() }`
        }
    };

    render() {
        const randomMessage = this.getRandomMessage();

        return (            
            <div className="user-list-component">
                <div className="users-list">
                    { this.props.messages.map(message => {
                        return <div key={ message.id }>{ message.sender } --> { message.text }</div>
                    }) }
                </div>
                <div>
                    <button onClick={ () => this.props.addNewMessage(randomMessage) }> Add new message </button>
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