const ADD_POST                  = 'ADD_POST';
const UPDATE_POST_TEXTAREA      = 'UPDATE_POST_TEXTAREA';

export const postReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                username: 'dimka',
                content: state.textareaInput,
                avatar: 'https://ris.icc.ru/plugins/bree7e/cris/assets/images/man.png',
                likes: 0
            }
            state.posts.push(newPost);
            state.textareaInput = ''
            return state;
        }
        case UPDATE_POST_TEXTAREA: {
            
            state.textareaInput = action.text;
            return state;
        }
        default: {
            return state;
        }
    }
}

//action creators
export const addPostActionCreator              = ()        => ({ type: ADD_POST })
export const updatePostTextareaActionCreator   = (text)    => ({ type: UPDATE_POST_TEXTAREA, text: text })