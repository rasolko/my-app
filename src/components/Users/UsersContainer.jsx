import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import { follow, unfollow, setUsers, setPage, getTotalUsers, toggleIsFetching } from '../../redux/usersReducer';
import * as axios from 'axios';
import Preloader from '../../common/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.pageCount}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.getTotalUsers(response.data.totalCount);
                this.props.toggleIsFetching(false);
            });
    }
    getUsers = (p) => {
        this.props.setPage(p);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.page}&count=${this.props.pageCount}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
            });
    }
    render() {
        return (
            <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users 
                totalUsers={this.props.totalUsers}
                pageCount={this.props.pageCount}
                getUsers={this.getUsers}
                page={this.props.page}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                users={this.props.users} />
            </>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsers: state.usersPage.totalUsers,
        pageCount: state.usersPage.pageCount,
        page: state.usersPage.page,
        isFetching: state.usersPage.isFetching,
    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setPage: (page) => {
//             dispatch(setPageAC(page));
//         },
//         getTotalUsers: (totalUsers) => {
//             dispatch(getTotalUsersAC(totalUsers));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     }
// }
export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setPage,
    getTotalUsers,
    toggleIsFetching,
})(UsersContainer);