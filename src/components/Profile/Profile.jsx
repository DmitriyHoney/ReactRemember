import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'

// import cls from './Profile.module.css'

const Profile = (props) => {
    let { posts, textareaInput } = props.profilePage
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts}  textareaInput={textareaInput} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile