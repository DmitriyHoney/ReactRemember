import cls from './Users.module.css'

const Users = (props) => {
    let { usersPage, toggleFollow, setUsers } = props;
    if (usersPage.users.length === 0) {
        setUsers([
            { id: 1, name: 'Liza', city: 'Vladimir', country: 'Russia', avatar: 'https://www.1zoom.ru/big2/182/283191-frederika.jpg', status: 'I`m fine)', follow: true },
            { id: 2, name: 'Masha', city: 'Stavrovo', country: 'Russia', avatar: 'https://i.pinimg.com/736x/e0/75/c8/e075c8550e053650aa838f9c7c6b69d1.jpg', status: 'I`m sexy', follow: false },
            { id: 3, name: 'Elena', city: 'Vladimir', country: 'Russia', avatar: 'https://i.pinimg.com/736x/66/41/fe/6641fe757838beeb41311852d83778a0--deviant-art-tumblr.jpg', status: 'crazy girl', follow: true }
        ])
    }
    return (
        <div>
            {usersPage.users.map((u, index) => <div key={index} className={cls.wrap}>
                    <div className={cls.avatar}>
                        <img src={u.avatar} alt={`user-${index}`}/>
                    </div>
                    <div className={cls.userInfo}>
                        <div className={cls.name}>{u.name}</div>
                        <div className={cls.status}>{u.status}</div>
                        <div className={cls.country}>{u.country}</div>
                        <div className={cls.city}>{u.city}</div>
                        { u.follow
                            ? <button onClick={() => toggleFollow(u.id)}>Unfollow</button>
                            : <button onClick={() => toggleFollow(u.id)}>Follow</button>
                        }
                    </div>
                </div>
            )}
        </div>
    )
}

export default Users