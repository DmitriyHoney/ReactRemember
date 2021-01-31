
import { postReducer } from './reducer-post';
import { dialogReducer } from './reducer-dialog';

const store = {
    _state: {
        profilePage: {
            posts: [
                { username: 'dimka', content: 'something text', avatar: 'https://ris.icc.ru/plugins/bree7e/cris/assets/images/man.png', likes: 3 },
                { username: 'dimka', content: 'something text', avatar: 'https://apps.shopifycdn.com/listing_images/e8c7c2fb54b0b2b65bde115e60c3a9e9/icon/97093c0683cfe748e413a8b6bd496a10.png', likes: 2, },
                { username: 'dimka', content: 'hello! how are you?', avatar: 'https://ris.icc.ru/plugins/bree7e/cris/assets/images/man.png', likes: 5 },
            ],
            textareaInput: ''
        },
        
        dialogsPage: {
            dialogsItem: [
                { username: 'dimka', avatar: 'https://ris.icc.ru/plugins/bree7e/cris/assets/images/man.png', id: '1' },
                { username: 'maria', avatar: 'https://apps.shopifycdn.com/listing_images/e8c7c2fb54b0b2b65bde115e60c3a9e9/icon/97093c0683cfe748e413a8b6bd496a10.png', id: '2' },
            ],
            messages: [
                { isMine: false, text: 'Hello!' },
                { isMine: true, text: 'Hello, how are you?' }
            ],
            newMessageTextarea: ''
        },
    
        sidebarPage: {
            links: [
                { name: 'Profile', path: '/profile' },
                { name: 'Messages', path: '/messages' },
                { name: 'Dialogs', path: '/dialogs' },
                { name: 'News', path: '/news' },
            ],
            activeFiends: [
                { name: 'Marina', id: '2', avatar: 'https://apps.shopifycdn.com/listing_images/e8c7c2fb54b0b2b65bde115e60c3a9e9/icon/97093c0683cfe748e413a8b6bd496a10.png'},
                { name: 'Dimka', id: '1', avatar: 'https://ris.icc.ru/plugins/bree7e/cris/assets/images/man.png'},
            ]
        }
    },
    getState() {
        return this._state
    },
    
    subscribe: function(observer)  {
        this.rerenderDOM = observer
    },
    rerenderDOM: function() {
        console.log('rerender DOM');
    },

    dispatch(action) {
        
        this._state.profilePage = postReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)

        this.rerenderDOM(store);
    }
}

window.store = store;
window.state = store.getState();





export default store