const UPDATE_DIALOGS_TEXTAREA   = 'UPDATE_DIALOGS_TEXTAREA';
const ADD_MESSAGE_TO_DIALOG     = 'ADD_MESSAGE_TO_DIALOG';

export const dialogReducer = (state, action) => {
    switch(action.type) {
        case UPDATE_DIALOGS_TEXTAREA: {
            state.newMessageTextarea = action.text;
            return state;
        }
        case ADD_MESSAGE_TO_DIALOG: {
            let newMessage = {
                isMine: true, 
                text: state.newMessageTextarea
            }
            state.messages.push(newMessage)
            state.newMessageTextarea = '';
            return state;
        }
        default: {
            return state;
        }
    }
}

export const updateDialogTextareaActionCreator = (text)    => ({ type: UPDATE_DIALOGS_TEXTAREA, text: text })
export const addDialogMessageActionCreator     = ()        => ({ type: ADD_MESSAGE_TO_DIALOG })