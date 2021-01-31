import cls from './Avatar.module.css'

const Avatar = (props) => {
    let username = '';

    if (props.username) {
        username = <h3>{props.username}</h3>
    }

    return (
        <div className={cls.wrap}>
            <div className={cls.avatar}>
                <img src={props.avatar} alt="avatar" />
            </div>
            {username}
        </div>
        
    )
}

export default Avatar