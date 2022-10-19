import axios from 'axios'

export const api = axios.create({
    baseURL: 'http://13.125.37.220:8081/api'
})

export const getPostsPage = async (pageParam = 1, options = {}) => {
    const response = await api.get(`/posts?_page=${pageParam}`, options)
    return response.data
}

export const getExplore = async (pageParam = 1, options = {}) => {
    const response = await api.get(`/`)
    return response.data.data
}

export const getMain = async (pageParam = 1, options = {}) => {
    const response = await api.get(`/?page=${pageParam}`, options)
    return response.data.data
}

export const getProductDetail = async (productParam) => {
    const response = await api.get(`/item/${productParam}`)
    return response.data.data
}