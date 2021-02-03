import { connect } from 'react-redux';
import { updateDialogTextareaActionCreator, addDialogMessageActionCreator } from '../../../redux/reducer-dialog'
import AddMessage from './AddMessage.jsx';

const mapStateToProps = (state) => {
    debugger;
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch) => ({
    handleTextarea: (text) => {
        dispatch(updateDialogTextareaActionCreator(text))
    },
    handleAddNewMessage: () => {
        dispatch(addDialogMessageActionCreator())
    }
})

const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage)

export default AddMessageContainer;