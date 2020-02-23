import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setPageAC, getTotalUsersAC } from '../../redux/usersReducer';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsers: state.usersPage.totalUsers,
        pageCount: state.usersPage.pageCount,
        page: state.usersPage.page
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setPage: (page) => {
            dispatch(setPageAC(page));
        },
        getTotalUsers: (totalUsers) => {
            dispatch(getTotalUsersAC(totalUsers));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;