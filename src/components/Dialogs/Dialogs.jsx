

import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

import cls from './Dialogs.module.css'

const Dialogs = (props) => {
    let { dialogsItem, messages } = props.dialogsPage;

    return (
        <div className={cls.content}>
           <div className={cls.wrap}>
                <div className={cls.users}>
                    { dialogsItem.map(d => <DialogItem username={d.username} avatar={d.avatar} id={d.id}/>) }
                </div>
                <div className={cls.dialogs}>
                    {messages.map(m => <Message isMine={m.isMine} text={m.text}/>)}
                </div>
           </div>
        </div>
    )
}
export default Dialogs