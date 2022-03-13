import { FILTER_ACCESSORIES, FILTER_BEAUTY, FILTER_CLOTHING, FILTER_DISCOUNT, FILTER_HOUSEHOLD, FILTER_TYPE, PRODUCT_ERROR, PRODUCT_ID_ERROR, PRODUCT_ID_LOADING, PRODUCT_ID_SUCCESS, PRODUCT_LOADING, PRODUCT_SUCCESS } from "./actionType"

export const setLoading = () => {
    return {
        type: PRODUCT_LOADING
    }
}

export const setSuccess = (data) => {
    return {
        type: PRODUCT_SUCCESS,
        payload: data
    }
}

export const setError = () => {
    return {
        type: PRODUCT_ERROR
    }
}

export const setFilterClothing = (data) => {
    return {
        type: FILTER_CLOTHING,
        payload: data
    }
}

export const setFilterAccessories = (data) => {
    return {
        type: FILTER_ACCESSORIES,
        payload: data
    }
}

export const setFilterBeauty = (data) => {
    return {
        type: FILTER_BEAUTY,
        payload: data
    }
}

export const setFilterHousehold = (data) => {
    return {
        type: FILTER_HOUSEHOLD,
        payload: data
    }
}

export const setFilterType = (data) => {
    return {
        type: FILTER_TYPE,
        payload: data
    }
}

export const setFilterDiscount = (data) => {
    return {
        type: FILTER_DISCOUNT,
        payload: data
    }
}

export const setFindIdLoading = () => {
    return {
        type: PRODUCT_ID_LOADING
    }
}

export const setFindIdSuccess = (data) => {
    return {
        type: PRODUCT_ID_SUCCESS,
        payload: data
    }
}

export const setFindIdError = () => {
    return {
        type: PRODUCT_ID_ERROR
    }
}


