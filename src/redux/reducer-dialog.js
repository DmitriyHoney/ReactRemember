const UPDATE_DIALOGS_TEXTAREA   = 'UPDATE_DIALOGS_TEXTAREA';
const ADD_MESSAGE_TO_DIALOG     = 'ADD_MESSAGE_TO_DIALOG';

let initialState = {
    dialogsItem: [
        { username: 'dimka', avatar: 'https://ris.icc.ru/plugins/bree7e/cris/assets/images/man.png', id: '1' },
        { username: 'maria', avatar: 'https://apps.shopifycdn.com/listing_images/e8c7c2fb54b0b2b65bde115e60c3a9e9/icon/97093c0683cfe748e413a8b6bd496a10.png', id: '2' },
    ],
    messages: [
        { isMine: false, text: 'Hello!' },
        { isMine: true, text: 'Hello, how are you?' }
    ],
    newMessageTextarea: ''
}

export const dialogReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_DIALOGS_TEXTAREA: {
            return {
                ...state,
                newMessageTextarea: action.text
            }
        }
        case ADD_MESSAGE_TO_DIALOG: {
            return {
                ...state,
                messages: [
                    ...state.messages,
                    { isMine: true, text: state.newMessageTextarea }
                ],
                newMessageTextarea: ''
            }
        }
        default: {
            return state;
        }
    }
}

export const updateDialogTextareaActionCreator = (text)    => ({ type: UPDATE_DIALOGS_TEXTAREA, text: text })
export const addDialogMessageActionCreator     = ()        => ({ type: ADD_MESSAGE_TO_DIALOG })