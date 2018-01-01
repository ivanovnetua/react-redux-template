import React, { Component}  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewUserAction } from '../actions/actions'


class UserList extends Component {
    getRandomUser() {
        return {
            id: Date.now(),
            name: `user-${ Date.now() }`,
        }
    };

    render() {
        const randomUser = this.getRandomUser();

        return (            
            <div className="user-list-component">
                <div className="users-list">
                    { this.props.users.map(user => {
                        return <div key={ user.id }>{ user.name }</div>
                    }) }
                </div>
                <div>
                    <button onClick={ () => this.props.addNewUser(randomUser) }> Add new user </button>
                </div>
            </div>
        )   
     }
};

const mapStateToProps = (state) => {
    return {
        users: state.addUsers.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewUser: bindActionCreators(addNewUserAction, dispatch)
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);