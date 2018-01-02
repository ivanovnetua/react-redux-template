import React, { Component}  from 'react';
import Time from 'react-time';


export default class UserList extends Component {
    getRandomUser() {
        return {
            id: Date.now(),
            name: `user-${ Date.now() }`,
            time: Date.now()
        }
    }

    render() {
        const randomUser = this.getRandomUser();

        return (            
                    <div className="left">
                        <ul className="people">
                            { this.props.users.map(user => {
                                return (
                                    <li className="person" key={ user.id } onClick={ () => { this.props.changeActiveUser(user) } }>
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