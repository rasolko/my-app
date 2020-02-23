const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_PAGE = 'SET_PAGE';
const GET_TOTAL_USERS = 'GET_TOTAL_USERS';

let initialState = {
    users: [],
    page: 1,
    pageCount: 5,
    totalUsers: 20,
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
        default:
            return state;
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users,
    }
}
export const followAC = (userId) => {
    return {
        type: FOLLOW,
        userId,
    }
}
export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW,
        userId,
    }
}
export const setPageAC = (page) => {
    return {
        type: SET_PAGE,
        page,
    }
}
export const getTotalUsersAC = (totalUsers) => {
    return {
        type: GET_TOTAL_USERS,
        totalUsers,
    }
}

export default usersReducer;