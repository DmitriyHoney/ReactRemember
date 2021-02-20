import {profileReducer, addPostActionCreator, deletePostAC} from './reducer-profile';
let state = {
    posts: [
        { username: 'dimka', content: 'something text', avatar: 'https://ris.icc.ru/plugins/bree7e/cris/assets/images/man.png', likes: 3, id: 1 },
        { username: 'dimka', content: 'something text', avatar: 'https://apps.shopifycdn.com/listing_images/e8c7c2fb54b0b2b65bde115e60c3a9e9/icon/97093c0683cfe748e413a8b6bd496a10.png', likes: 2, id: 2  },
        { username: 'dimka', content: 'hello! how are you?', avatar: 'https://ris.icc.ru/plugins/bree7e/cris/assets/images/man.png', likes: 5, id: 3 },
    ]
};
test('length post should be incremented', () => {
    // 1. test data
    let actionCreator = addPostActionCreator('it-kamasutra.com');
    
    // 2. action
    let newState = profileReducer(state, actionCreator)

    // 3. expectation
    expect(newState.posts.length).toBe(4)
});

test('length after delete post must decrement', () => {
    // 1. test data
    let actionCreator = deletePostAC(3);
    // 2. action
    let newState = profileReducer(state, actionCreator)

    // 3. expectation
    expect(newState.posts.length).toBe(2)
});
