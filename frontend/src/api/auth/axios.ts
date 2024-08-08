import axios, { CreateAxiosDefaults } from "axios"
import AuthHelper from "./auth.helper"
import ApiHelper from "../api.helper"
import AuthService from "./auth.service"

// const AUTH_API_URL = "http://localhost:5000/auth"
const AUTH_API_URL = "https://portfolio-form-backend.vercel.app/auth"

const axiosOptions: CreateAxiosDefaults = {
    baseURL: AUTH_API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
}

export const axiosInstance = axios.create(axiosOptions)
const axiosFormInstance = axios.create(axiosOptions)

axiosFormInstance.interceptors.request.use(config => {
    const accessToken = AuthHelper.getAccessToken()
    if (config.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
})

axiosFormInstance.interceptors.response.use(config => config, async error => {
    console.log("interceptor", error)
    // const request = error.config

    // if ((error.response.status === 401 || ApiHelper.getErrorMessage(error) === "" || ApiHelper.getErrorMessage(error) === "") && error.config && !error.config._isRetry) {
    //     request._isRetry = true
    //     try {
            
    //     } catch (e) {}
    // }

    throw error
})