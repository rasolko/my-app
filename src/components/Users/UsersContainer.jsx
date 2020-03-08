import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import { follow, unfollow, setPage, getUsers } from '../../redux/usersReducer';
import Preloader from '../../common/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.page, this.props.pageCount);
    }
    getUsers = (p) => {
        this.props.setPage(p);
        this.props.getUsers(this.props.page, this.props.pageCount);
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
                users={this.props.users}
                isFollowingInProgress={this.props.isFollowingInProgress} />
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
        isFollowingInProgress: state.usersPage.isFollowingInProgress,
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

export default compose(
    connect(mapStateToProps, {follow, unfollow, setPage, getUsers}),
    withAuthRedirect
)(UsersContainer);