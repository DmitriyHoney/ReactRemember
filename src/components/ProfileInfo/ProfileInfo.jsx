import MyPosts from './MyPosts/MyPosts.jsx.js.js'

import cls from './Profile.module.css'

const Profile = () => {
    return (
        <div className={cls.content}>
            main content
            <div className={cls.image}>
                <img src="https://s.poembook.ru/theme/fe/4a/5e/ac17d636ffa4c9d688dd05cb7fd8c04d8793b6d6.jpeg" alt="content" />
            </div>

            <div>
                {/* <img src="https://vuzopedia.ru/storage/app/uploads/public/5f4/cf9/9eb/5f4cf99eb1595666607312.jpg" alt="avatar"/> */}
                ava + descr
            </div>
            <MyPosts />
            
        </div>
    )
}

export default Profile