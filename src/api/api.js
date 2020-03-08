import * as axios from 'axios';
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "6128eb2d-9242-410c-ad5a-a8d00aa93951"
    },
});

export const usersAPI = {
    getUsers(page = 1, pageCount = 10){
        return instance.get(`users?page=${page}&count=${pageCount}`)
        .then(response => {
            return response.data;
        })
    },
    getProfile(userId){
        return instance.get(`profile/${userId}`)
        .then(response => response.data);
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
        .then(respone => respone.data);
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
        .then(respone => respone.data);
    }
}
export const authAPI = {
    me(){
        return instance.get(`auth/me`)
        .then(response => response.data);
    }
}
