import Avatar from '../../../common/Avatar/Avatar.jsx'

import cls from './Post.module.css'

const Post = (props) => {
    return (
        <div className={cls.item}>
            <Avatar 
                avatar={props.avatar}
                username={props.username}
            />
            <div className={cls.info}>
                <div>{props.content}</div>
            </div>
        </div>
    )
}

export default Post