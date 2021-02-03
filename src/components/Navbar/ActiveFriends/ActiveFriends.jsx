import Avatar from '../../common/Avatar/Avatar.jsx'
import { NavLink } from 'react-router-dom'
// import cls from './ActiveFriends.module.css'

const ActiveFriends = (props) => {
    if (props.activeFiends) {
        return (
            props.activeFiends.map(user => (
                <NavLink to={`/profile/${user.id}`} key={user.id}>
                        <Avatar avatar={user.avatar} />
                </NavLink>
            ))
        )
    } else {
        return ''
    }
    
}

export default ActiveFriends