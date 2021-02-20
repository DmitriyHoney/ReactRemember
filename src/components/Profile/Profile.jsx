import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'
import MyPosts from "./MyPosts/MyPosts";
import React from "react";

const Profile = (props) => {
    let { profilePage, addPostActionCreator, updateProfileStatusThunkCreator } = props;
    return (
        <div>
            <ProfileInfo profile={profilePage.profile} updateStatus={updateProfileStatusThunkCreator} status={profilePage.status}/>
            <MyPosts
                posts={profilePage.posts}
                textareaInput={profilePage.textareaInput}
                addPost={addPostActionCreator}
            />
        </div>
    )
}

export default Profile