import React from "react";

import Paginate from "../common/Paginate/Paginate";

import defaultUser from "../../assets/defaultUser.jpg";
import cls from "./Users.module.css";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let { changePage, followThunk, unfollowThunk, followingProcessStack, users, paginate } = props;
    debugger;
    let quantityPage = Math.ceil(paginate.totalCount / paginate.count);

    return <div>
        <Paginate currentPage={paginate.page} quantity={quantityPage} click={(newPage) => changePage(newPage)}/>
        {users.map((u, index) => <div key={index} className={cls.wrap}>
                <NavLink to={`/profile/${u.id}`} className={cls.avatar}>
                    <img src={u.photos.small ? u.photos.small : defaultUser} alt={`user-${index}`}/>
                </NavLink>
                <div className={cls.userInfo}>
                    <div className={cls.name}>{u.name}</div>
                    <div className={cls.status}>{u.status}</div>
                    <div className={cls.city}>{u.city}</div>
                    { u.followed
                        ? <button disabled={followingProcessStack.includes(u.id)} onClick={() => unfollowThunk(u.id)}>Unfollow</button>
                        : <button disabled={followingProcessStack.includes(u.id)} onClick={() => followThunk(u.id)}>Follow</button>
                    }
                </div>
            </div>
        )}
    </div>
}

export default Users;