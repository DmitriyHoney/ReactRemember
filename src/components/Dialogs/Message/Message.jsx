import cls from '../Dialogs.module.css'

const Message = (props) => {
    let { isMine, text } = props;
    return (
        <div className={`${isMine ? cls.mine : cls.them} ${cls.msg}`}>
            {text}
        </div>
    )
}

export default Message