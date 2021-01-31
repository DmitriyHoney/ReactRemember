
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
        switch (action.type) {
            
            case 'ADD_POST': {
                let newPost = {
                    username: 'dimka',
                    content: this._state.profilePage.textareaInput,
                    avatar: 'https://ris.icc.ru/plugins/bree7e/cris/assets/images/man.png',
                    likes: 0
                }
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.textareaInput = ''
                this.rerenderDOM(store);
                break;
            }
            case 'UPDATE_POST_TEXTAREA': {
                this._state.profilePage.textareaInput = action.text;
                this.rerenderDOM(store);
                break;
            }
            default: {
                break;
            }
        }
    }
}

window.store = store;
window.state = store.getState();


export default store