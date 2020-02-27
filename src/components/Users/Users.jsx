import React from 'react';
import userPhoto from '../../img/ava.jpg';
import s from './Users.module.css';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
const Users = (props) => {
    let totalPageCount = Math.ceil(props.totalUsers / props.pageCount);
    let usersPage = [];
    for (let i = 1; i <= totalPageCount; i++) {
        usersPage.push(i);
    }
    return (
        <div>
            {usersPage.map((p) => {
                return <span className={props.page === p && s.page}
                    onClick={() => { props.getUsers(p) }}
                >{p}</span>
            })}
            {props.users.map((u) => {
                return (
                    <div key={u.id}>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    axios.delete('https://social-network.samuraijs.com/api/1.0/follow/' + u.id, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "6128eb2d-9242-410c-ad5a-a8d00aa93951"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id);
                                            }
                                        })
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    axios.post('https://social-network.samuraijs.com/api/1.0/follow/' + u.id, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "6128eb2d-9242-410c-ad5a-a8d00aa93951"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
                                        })
                                }}>Follow</button>}
                        </div>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            <p>{u.name}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}
export default Users;