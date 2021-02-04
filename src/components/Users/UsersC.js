

import React from "react";
import cls from "./Users.module.css";
import defaultUser from "../../assets/defaultUser.jpg";
import * as axios from "axios";

class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('componentDidMount')
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        return <div>
            {this.props.usersPage.users.map((u, index) => <div key={index} className={cls.wrap}>
                    <div className={cls.avatar}>
                        <img src={u.photos.small ? u.photos.small : defaultUser} alt={`user-${index}`}/>
                    </div>
                    <div className={cls.userInfo}>
                        <div className={cls.name}>{u.name}</div>
                        <div className={cls.status}>{u.status}</div>
                        <div className={cls.city}>{u.city}</div>
                        { u.followed
                            ? <button onClick={() => this.props.toggleFollow(u.id)}>Unfollow</button>
                            : <button onClick={() => this.props.toggleFollow(u.id)}>Follow</button>
                        }
                    </div>
                </div>
            )}
        </div>
    }
}

export default Users;