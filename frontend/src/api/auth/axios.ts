import axios, { CreateAxiosDefaults } from "axios"

const AUTH_API_URL = "http://localhost:5000/auth"

const axiosOptions: CreateAxiosDefaults = {
    baseURL: AUTH_API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
}

export const axiosInstance = axios.create(axiosOptions)
