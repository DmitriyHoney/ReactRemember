import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'
import MyPosts from "./MyPosts/MyPosts";
import React from "react";



const Profile = (props) => {
    let { profilePage, handleInput, handleAddPost } = props;

    return (
        <div>
            <ProfileInfo />
            <MyPosts
                posts={profilePage.posts}
                textareaInput={profilePage.textareaInput}
                updateTextareaField={(text) => handleInput(text)}
                addPostHandler={() => handleAddPost()}
            />
        </div>
    )
}

export default Profile