import React from "react";

import Paginate from "../common/Paginate/Paginate";

import defaultUser from "../../assets/defaultUser.jpg";
import cls from "./Users.module.css";

const Users = (props) => {
    let { usersPage, toggleFollow, changePage } = props;
    let quantityPage = Math.ceil(usersPage.paginate.totalCount / usersPage.paginate.count);

    return <div>
        <Paginate currentPage={usersPage.paginate.page} quantity={quantityPage} click={(newPage) => changePage(newPage)}/>
        {props.usersPage.users.map((u, index) => <div key={index} className={cls.wrap}>
                <div className={cls.avatar}>
                    <img src={u.photos.small ? u.photos.small : defaultUser} alt={`user-${index}`}/>
                </div>
                <div className={cls.userInfo}>
                    <div className={cls.name}>{u.name}</div>
                    <div className={cls.status}>{u.status}</div>
                    <div className={cls.city}>{u.city}</div>
                    { u.followed
                        ? <button onClick={() => toggleFollow(u.id)}>Unfollow</button>
                        : <button onClick={() => toggleFollow(u.id)}>Follow</button>
                    }
                </div>
            </div>
        )}
    </div>
}

export default Users;