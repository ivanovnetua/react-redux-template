import React, { Component}  from 'react';
import { connect } from 'react-redux';

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
        addNewUser: user => dispatch({ type: "ADD_NEW_USER", user })
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);