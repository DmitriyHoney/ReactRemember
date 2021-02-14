
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '2aa95529-03f3-4e18-bb22-995bc7fdf5db'
    }
})

export const usersAPI = {
    getUsers(page = 1, count = 10) {
        return instance.get(`users?page=${page}&count=${count}`)
            .then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    },
    updateProfile(text) {
        return instance.put(`profile/status`, { status: text })
            .then(response => response.data)
    },
    getUserStatus(id) {
        return instance.get(`profile/status/${id}`)
            .then(response => response.data)
    }
}

export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    signIn(formData) {
        return instance.post(`/auth/login`, formData)
            .then(response => response.data)
    },
    logout() {
        return instance.delete(`/auth/login`)
            .then(response => response.data)
    }
}