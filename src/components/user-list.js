import React, { Component}  from 'react';
import { connect } from 'react-redux';

class UserList extends Component {
    render() {
        return (
            <div className="users-list">
                { this.props.users.map(user => {
                    return <div key={ user.id }>{ user.name } ({user.position})</div>
                }) }
            </div>
        )   
     }
}

export default connect((state) => {
    return {
        users: state.users
    }
})(UserList);