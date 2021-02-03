import cls from '../AddMessage/AddMessage.module.css'

const AddMessage = (props) => {
    debugger;
    let { dialogsPage,  handleTextarea, handleAddNewMessage } = props;
    function handleTextareaDumb(e) {
        handleTextarea(e.target.value)
    }
    function handleAddNewMessageDumb() {
        handleAddNewMessage()
    }
    return (
        <div className={cls.wrap}>
            <textarea 
                placeholder="add message" 
                className={cls.textarea} 
                value={dialogsPage.newMessageTextarea}
                onChange={handleTextareaDumb}
            />
            <button className={cls.wrapBtn} onClick={handleAddNewMessageDumb}>Send message</button>
        </div>
    )
}

export default AddMessage;