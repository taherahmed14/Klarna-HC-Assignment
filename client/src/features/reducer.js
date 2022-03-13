import { FILTER_ACCESSORIES, FILTER_BEAUTY, FILTER_CLOTHING, FILTER_DISCOUNT, FILTER_HOUSEHOLD, FILTER_TYPE, PRODUCT_ERROR, PRODUCT_ID_ERROR, PRODUCT_ID_LOADING, PRODUCT_ID_SUCCESS, PRODUCT_LOADING, PRODUCT_SUCCESS } from "./actionType";


const init = { loading: false, allProducts: [], data: [], error: false, product: {} };

export const reducer = (state = init, { type, payload }) => {
    switch(type) {
        case PRODUCT_LOADING:
            return {
                ...state,
                loading: true
            }
        
        case PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                allProducts: payload,
                data: payload
            }
        
        case PRODUCT_ERROR:
            return {
                ...state,
                error: true
            }

        case FILTER_CLOTHING:
            return {
                ...state,
                allProducts: payload,
            }

        case FILTER_ACCESSORIES:
            return {
                ...state,
                allProducts: payload,
            }

        case FILTER_BEAUTY:
            return {
                ...state,
                allProducts: payload,
            }

        case FILTER_HOUSEHOLD:
            return {
                ...state,
                allProducts: payload,
            }

        case FILTER_TYPE:
            return {
                ...state,
                allProducts: payload,
            }

        case FILTER_DISCOUNT:
            return {
                ...state,
                allProducts: payload,
            }

        case PRODUCT_ID_LOADING:
            return {
                ...state,
                loading: true
            }
        
        case PRODUCT_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                product: payload
            }
        
        case PRODUCT_ID_ERROR:
            return {
                ...state,
                error: true
            }
        
        default:
            return state;
    }
}