import * as actions from "./actions";
import { isArray } from "util";

const initialState = {
    product: {},
    filters: [],
    filteredVariants: [],
    selectableAttributes: [],
    priceRange: {
        minimumQuantity: 0,
        maximumQuantity: 0,
        price: 0.00
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.PRODUCT_FETCH:
            return {
                ...state,
                product: action.payload,
                filteredVariants: action.payload.productVariants,
                selectableAttributes: action.payload.selectableAttributes
            };

        case actions.PRODUCT_FILTER:
            const filteredVariants = [];
            const filters = [...state.filters];
            const filterIndex = filters.findIndex(item => item.name === action.payload.name);
            
            // Add, update or remove filter
            if (filterIndex > -1 && action.payload.value != null) {
                filters[filterIndex] = action.payload;
            } else if (filters[filterIndex] == null) {
                filters.push(action.payload);
            } else if (filters[filterIndex] != null && action.payload.value == null) {
                filters.splice(filterIndex, 1);
            }

            // Default is first product variants if there is no filter
            if (filters.length === 0) {
                return {
                    ...state,
                    filters: filters,
                    filteredVariants: [...state.product.productVariants]
                };
            }

            // Filter variants
            if (isArray(state.product.productVariants)) {
                // In every variant
                state.product.productVariants.forEach(variant => {
                    let filtersPassed = 0;
                    
                    variant.attributes.forEach(attr => {
                        // For every selected filter
                        filters.forEach((filter, index) => {
                            if (filter.name === attr.name && filter.value === attr.value) {
                                filtersPassed++;
                            }
                        });
                    });

                    if (filtersPassed === filters.length) {
                        const existingVariant = filteredVariants.find(filteredVariant => variant.id === filteredVariant.id);

                        if (existingVariant == null) {
                            filteredVariants.push(variant);
                        }
                    }
                });
            }

            return {
                ...state,
                filters: filters,
                filteredVariants: filteredVariants
            };

        case actions.PRODUCT_PRICE_RANGE:
            return {
                ...state,
                priceRange: action.payload
            }

        default:
            return state;
    }
}

export default reducer;
