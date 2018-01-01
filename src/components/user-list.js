import React, { Component}  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewUserAction } from '../actions/actions';
import Time from 'react-time';


class UserList extends Component {
    getRandomUser() {
        return {
            id: Date.now(),
            name: `user-${ Date.now() }`,
            time: Date.now()
        }
    };

    render() {
        const randomUser = this.getRandomUser();

        return (            
                    <div className="left">
                        <ul className="people">
                            { this.props.users.map(user => {
                                return (
                                    <li className="person" key={ user.id }>
                                        <img src={ user.avatar } alt="" />
                                        <span className="name">{ user.name }</span>
                                        <span className="time">
                                            <Time value={ user.time } format="YYYY/MM/DD" />
                                        </span>
                                        <span className="preview">I was wondering...</span>
                                    </li>
              
                                )
                                
                            }) } 
                        </ul>
                        <div className="add-user-section">
                            <button className="add-user" onClick={ () => this.props.addNewUser(randomUser) }> Add new user </button>
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