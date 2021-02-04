import React from 'react'
import Post from './Post/Post.jsx'
import cls from './MyPosts.module.css'

const MyPosts = (props) => {
  let { posts, textareaInput, updateTextareaField, addPostHandler } = props;

  function handleAddPost() {
    addPostHandler()
  }
  function handleInput(e) {
    updateTextareaField(e.target.value)
  }
  
    return (
        <div>
            My postsupdateTextareaField
            <div>
                <textarea onChange={handleInput} value={textareaInput}></textarea>
                <button onClick={handleAddPost}>add post</button>
            </div>
            <div className={cls.posts}>
              {posts.map((post, index) => <Post username={post.username} content={post.content} avatar={post.avatar} key={index} />)}
            </div>
        </div>
    )
}

export default MyPosts