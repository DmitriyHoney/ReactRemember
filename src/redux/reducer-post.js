const ADD_POST                  = 'ADD_POST';
const UPDATE_POST_TEXTAREA      = 'UPDATE_POST_TEXTAREA';

let initialState = {
    posts: [
        { username: 'dimka', content: 'something text', avatar: 'https://ris.icc.ru/plugins/bree7e/cris/assets/images/man.png', likes: 3 },
        { username: 'dimka', content: 'something text', avatar: 'https://apps.shopifycdn.com/listing_images/e8c7c2fb54b0b2b65bde115e60c3a9e9/icon/97093c0683cfe748e413a8b6bd496a10.png', likes: 2, },
        { username: 'dimka', content: 'hello! how are you?', avatar: 'https://ris.icc.ru/plugins/bree7e/cris/assets/images/man.png', likes: 5 },
    ],
    textareaInput: ''
}

export const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                username: 'dimka',
                content: state.textareaInput,
                avatar: 'https://ris.icc.ru/plugins/bree7e/cris/assets/images/man.png',
                likes: 0
            }
            return {
                ...state,
                posts: [
                    ...state.posts,
                    newPost
                ],
                textareaInput: ''
            }
        }
        case UPDATE_POST_TEXTAREA: {
            return {
                ...state,
                textareaInput: action.text
            }
        }
        default: {
            return state;
        }
    }
}

//action creators
export const addPostActionCreator              = ()        => ({ type: ADD_POST })
export const updatePostTextareaActionCreator   = (text)    => ({ type: UPDATE_POST_TEXTAREA, text: text })