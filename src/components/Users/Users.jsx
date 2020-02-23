import React from 'react';
import * as axios from 'axios';
import userPhoto from '../../img/ava.jpg';
import s from './Users.module.css';
class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.pageCount}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.getTotalUsers(response.data.totalCount);
            });
    }
    getUsers = (p) => {
        this.props.setPage(p);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.pageCount}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }
    render() {
        let totalPageCount = Math.ceil(this.props.totalUsers / this.props.pageCount);
        let usersPage = [];
        for(let i = 1; i <= totalPageCount; i++){
            usersPage.push(i);
        }
        return (
            <div>
                {usersPage.map((p) => {
                    return <span className={this.props.page === p && s.page}
                    onClick={() => {this.getUsers(p)}}
                    >{p}</span>
                })} 
                {this.props.users.map((u) => {
                    return (
                        <div key={u.id}>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(u.id);
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id);
                                    }}>Follow</button>}
                            </div>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} />
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
}
export default Users;