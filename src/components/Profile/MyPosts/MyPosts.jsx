import React from 'react'
import Post from './Post/Post.jsx'
import cls from './MyPosts.module.css'
import { reset, Field, reduxForm } from 'redux-form'
import { required, minLength } from '../../../utils/validators.js'
import { Textarea } from '../../common/FormControls/index.js'
const minLength5 = minLength(5);

const MyPosts = (props) => {
  let { posts, addPost } = props;
  

  function handleSubmit(formData) {
    addPost(formData.text);
  }
  
  return (
      <div>
          My postsupdateTextareaField
          <AddFormWithReduxForm onSubmit={handleSubmit} />
          <div className={cls.posts}>
            {posts.map((post, index) => <Post username={post.username} content={post.content} avatar={post.avatar} key={index} />)}
          </div>
      </div>
  )
}

const AddPostForm = props => {

  
  return (
    <form onSubmit={props.handleSubmit}>
        <Field name="text" component={Textarea} type="text" validate={[required, minLength5]} placeholder="add your post" />
        <button>add post</button>
    </form>
  )
}

const afterSubmit = (result, dispatch) => dispatch(reset('addPost'));

const AddFormWithReduxForm = reduxForm({
  form: 'addPost',
  onSubmitSuccess: afterSubmit,
})(AddPostForm)

export default MyPosts