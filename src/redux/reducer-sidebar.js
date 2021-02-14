

let initialState = {
    links: [
        { name: 'Profile', path: '/profile/6722' },
        { name: 'Users', path: '/users' },
        { name: 'Dialogs', path: '/dialogs' },
        { name: 'News', path: '/news' },
    ],
    activeFiends: [
        { name: 'Marina', id: '2', avatar: 'https://apps.shopifycdn.com/listing_images/e8c7c2fb54b0b2b65bde115e60c3a9e9/icon/97093c0683cfe748e413a8b6bd496a10.png'},
        { name: 'Dimka', id: '1', avatar: 'https://ris.icc.ru/plugins/bree7e/cris/assets/images/man.png'},
    ]
}

export const sidebarReducer = (state = initialState, action) => {
    switch(action.type) {
        default: {
            return state;
        }
    }
}

