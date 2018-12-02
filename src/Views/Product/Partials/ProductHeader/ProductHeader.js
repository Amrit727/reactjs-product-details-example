import React from 'react';
import StarRatings from 'react-star-ratings';

import './ProductHeader.css';

const header = (props) => {

    const product = props.product;

    return (
        <header className="product-header">
            <h3>{product.title}</h3>
            <div>
                <StarRatings
                    rating={4.5}
                    starDimension="40px"
                    starSpacing="15px"
                />
            </div>
            <div>
                {
                    product.priceRange != null
                        ? product.priceRange.from + ' - ' + product.priceRange.to + ' ' + product.currency
                        : null
                }
            </div>

        </header>
    )
};

export default header;