import * as actions from "./actions";

const initialState = {
    product: {},
    filters: [],
    filteredVariants: [],
    priceRange: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.PRODUCT_FETCH:
            return {
                ...state,
                product: action.payload,
                filteredVariants: action.payload.productVariants
            };

        case actions.PRODUCT_FILTER:
            const filters = [...state.filters];
            const filterIndex = filters.findIndex(item => item.name === action.payload.name);
            
            if (filterIndex > -1) {
                filters[filterIndex] = action.payload;
            } else {
                filters.push(action.payload);
            }

            return {
                ...state,
                filters: filters
            };
        
        default:
            return state;
    }
}

export default reducer;
