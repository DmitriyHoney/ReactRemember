import cls from './Header.module.css'

const UserInfo = props => {
    return (
        <div>
            <span>{props.login}</span>
            <button onClick={props.logout}>logout</button>
        </div>
    )
}

const Header = (props) => {
    return (
        <header className={cls.header}>
            <img src="https://forexdengi.com/attachment.php?attachmentid=2690756" alt="logotype"/>
            {props.isAuth 
                ? <UserInfo login={props.login} logout={props.logoutThunkCreator}/>
                : 'login'
            }
        </header>
    )
};

export default Header