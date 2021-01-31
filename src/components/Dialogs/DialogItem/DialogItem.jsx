import { NavLink } from 'react-router-dom'
import Avatar from '../../common/Avatar/Avatar.jsx'
// import cls from '../Dialogs.module.css'

const DialogItem = (props) => {
    let { id, username, avatar } = props;
    let path = `/dialogs/${id}`
    return (
        <NavLink to={path}>
            <Avatar username={username} avatar={avatar}/>
        </NavLink>
    )
}


export default DialogItem