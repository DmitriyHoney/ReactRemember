import {addDialogMessageActionCreator, updateDialogTextareaActionCreator} from "../../redux/reducer-dialog";
import Dialogs from "./Dialogs.jsx";

const {connect} = require("react-redux");

const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage
})

const mapDispatchToProps = (dispatch) => ({
    handleTextarea: (text) => {
        dispatch(updateDialogTextareaActionCreator(text))
    },
    handleAddNewMessage: () => {
        dispatch(addDialogMessageActionCreator())
    }
})

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;