

import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { reduxForm, Field} from 'redux-form' 

import cls from './Dialogs.module.css'

const Dialogs = (props) => {
    let { dialogsPage, addDialogMessageActionCreator } = props;

    function handleSubmit(formData) {
        addDialogMessageActionCreator(formData.text)
    }
    
    return (
        <div className={cls.content}>
           <div className={cls.wrap}>
                <div className={cls.users}>
                    { dialogsPage.dialogsItem.map(d => <DialogItem username={d.username} avatar={d.avatar} id={d.id} key={d.id} />) }
                </div>
                <div className={cls.dialogs}>
                    {dialogsPage.messages.map((m, index) => <Message isMine={m.isMine} text={m.text} key={index} />)}
                </div>
                
           </div>

            <AddMessageFormWithReduxForm onSubmit={handleSubmit} />

        </div>
    )
}

const AddMessageForm = props => {
    return (
        <form className={cls.wrap} onSubmit={props.handleSubmit}>
            <Field placeholder="add message" name="text" className={cls.textarea} component="textarea" type="text" />
            <button className={cls.wrapBtn}>Send message</button>
        </form>
    )
}

const AddMessageFormWithReduxForm = reduxForm({
    form: 'addMessageDialog'
})(AddMessageForm)

export default Dialogs