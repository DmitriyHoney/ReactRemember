import cls from './Users.module.css'
import * as axios from 'axios'
import defaultUser from '../../assets/defaultUser.jpg'

const Users = (props) => {
    let { usersPage, toggleFollow, setUsers } = props;
    if (usersPage.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            setUsers(response.data.items)
        })
    }
    return (
        <div>
            {usersPage.users.map((u, index) => <div key={index} className={cls.wrap}>
                    <div className={cls.avatar}>
                        <img src={u.photos.small ? u.photos.small : defaultUser} alt={`user-${index}`}/>
                    </div>
                    <div className={cls.userInfo}>
                        <div className={cls.name}>{u.name}</div>
                        <div className={cls.status}>{u.status}</div>
                        {/*<div className={cls.country}>{u.country}</div>*/}
                        <div className={cls.city}>{u.city}</div>
                        { u.followed
                            ? <button onClick={() => toggleFollow(u.id)}>Unfollow</button>
                            : <button onClick={() => toggleFollow(u.id)}>Follow</button>
                        }
                    </div>
                </div>
            )}
        </div>
    )
}

export default Users