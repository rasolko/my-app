const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_PAGE = 'SET_PAGE';
const GET_TOTAL_USERS = 'GET_TOTAL_USERS';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    page: 1,
    pageCount: 5,
    totalUsers: 0,
    isFetching: true,
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case FOLLOW: {
            return {
               ...state,
               users: state.users.map((u) => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
               })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_PAGE: {
            return {
                ...state,
                page: action.page
            }
        }
        case GET_TOTAL_USERS: {
            return {
                ...state,
                totalUsers: action.totalUsers
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
        default:
            return state;
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users,
    }
}
export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId,
    }
}
export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId,
    }
}
export const setPage = (page) => {
    return {
        type: SET_PAGE,
        page,
    }
}
export const getTotalUsers = (totalUsers) => {
    return {
        type: GET_TOTAL_USERS,
        totalUsers,
    }
}
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching,
    }
}
export default usersReducer;