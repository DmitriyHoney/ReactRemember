import React from 'react'
import {addDialogMessageActionCreator} from "../../redux/reducer-dialog";
import Dialogs from "./Dialogs.jsx";

const {connect} = require("react-redux");

const mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage
})

// const mapDispatchToProps = (dispatch) => ({
//     handleTextarea: (text) => {
//         dispatch(updateDialogTextareaActionCreator(text))
//     },
//     handleAddNewMessage: () => {
//         dispatch(addDialogMessageActionCreator())
//     }
// })

class DialogsContainer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Dialogs {...this.props}/>
        )
    }
}

export default connect(mapStateToProps, {
    addDialogMessageActionCreator
})(DialogsContainer);