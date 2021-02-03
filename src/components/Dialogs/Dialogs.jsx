

import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

import cls from './Dialogs.module.css'

const Dialogs = (props) => {
    let { dialogsItem, messages, newMessageTextarea } = props.dialogsPage;
    
    return (
        <div className={cls.content}>
           <div className={cls.wrap}>
                <div className={cls.users}>
                    { dialogsItem.map(d => <DialogItem username={d.username} avatar={d.avatar} id={d.id} key={d.id} />) }
                </div>
                <div className={cls.dialogs}>
                    {messages.map((m, index) => <Message isMine={m.isMine} text={m.text} key={index} />)}
                </div>
                
           </div>

            <div className={cls.wrap}>
                <textarea
                    placeholder="add message"
                    className={cls.textarea}
                    value={newMessageTextarea}
                    onChange={(e) => props.handleTextarea(e.target.value)}
                />
                    <button className={cls.wrapBtn} onClick={() =>  props.handleAddNewMessage()}>Send message</button>
            </div>

        </div>
    )
}
export default Dialogs