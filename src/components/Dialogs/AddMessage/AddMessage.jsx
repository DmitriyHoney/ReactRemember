import cls from '../AddMessage/AddMessage.module.css'
import { updateDialogTextareaActionCreator, addDialogMessageActionCreator } from '../../../redux/reducer-dialog'

const AddMessage = (props) => {
    let { dispatch, newMessageTextarea } = props;
    function handleTextarea(e) {
        dispatch(updateDialogTextareaActionCreator(e.target.value))
    }
    function handleAddNewMessage(e) {
        dispatch(addDialogMessageActionCreator())
    }
    return (
        <div className={cls.wrap}>
            <textarea 
                placeholder="add message" 
                className={cls.textarea} 
                value={newMessageTextarea}
                onChange={handleTextarea}
            />
            <button className={cls.wrapBtn} onClick={handleAddNewMessage}>Send message</button>
        </div>
    )
}

export default AddMessage;