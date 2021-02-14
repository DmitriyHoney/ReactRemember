import React from 'react'
import MyPosts from './MyPosts.jsx'
import { addPostActionCreator, updatePostTextareaActionCreator } from '../../../redux/reducer-profile'


const MyPostsContainer = (props) => {

let {store, dispatch} = props;
let  { profilePage } = store.getState()

  function handleAddPost() {
    dispatch(addPostActionCreator())
  }
  function handleInput(text) {
    dispatch(updatePostTextareaActionCreator(text))
  }

  
    return <MyPosts 
        posts={profilePage.posts}
        textareaInput={profilePage.textareaInput}
        updateTextareaField={handleInput}
        addPostHandler={handleAddPost}
    />
}

export default MyPostsContainer