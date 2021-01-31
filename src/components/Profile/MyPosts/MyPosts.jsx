import React from 'react'
import Post from './Post/Post.jsx'

import cls from './MyPosts.module.css'

const MyPosts = (props) => {
  let {posts, textareaInput, dispatch} = props;

  function handleAddPost(e) {
    let action = { type: 'ADD_POST' }
    dispatch(action)
  }
  function handleInput() {
    let action = { type: 'UPDATE_POST_TEXTAREA', text: textareaRef.current.value }
    dispatch(action)
  }

  let textareaRef = React.createRef()
  
    return (
        <div>
            My posts
            <div>
                <textarea ref={textareaRef} onChange={handleInput} value={textareaInput}></textarea>
                <button onClick={handleAddPost}>add post</button>
            </div>
            <div className={cls.posts}>
              {posts.map(post => <Post username={post.username} content={post.content} avatar={post.avatar}/>)}
            </div>
        </div>
    )
}

export default MyPosts