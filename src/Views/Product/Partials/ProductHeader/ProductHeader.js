import React from 'react';
import StarRatings from 'react-star-ratings';

import './ProductHeader.css';

const header = (props) => {

    const product = props.product;

    return (
        <header className="product-header">
            <h3>{product.title}</h3>
            <div className="mb-16">
                <div className="product-star-container">
                    <StarRatings
                        rating={4.5}
                        starDimension="20px"
                        starSpacing="2px"
                        starRatedColor="#ffc107"
                    />
                </div>                
                <a href="/" style={{ margin: '0 8px' }}>23 Yorum</a>
            </div>
            <h4 className="mb-0">
                {
                    product.priceRange != null
                        ? product.priceRange.from + ' - ' + product.priceRange.to + ' ' + product.currency
                        : null
                }
                <span className="subheader" style={{ padding: '0 8px' }}>/ Adet</span>
            </h4>
            <div>
                <span className="subheader">120 Adet (Minimum Sipariş Adedi)</span>
            </div>
        </header>
    )
};

export default header;