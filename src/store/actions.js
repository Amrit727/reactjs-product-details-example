export const PRODUCT_FETCH = 'PRODUCT_FETCH';
export const PRODUCT_FILTER = 'PRODUCT_FILTER';

export const fetchProduct = (product) => {
    return {
        type: PRODUCT_FETCH,
        payload: product
    }
}

export const filterVariants = (filter) => {
    return {
        type: PRODUCT_FILTER,
        payload: filter
    }
}
