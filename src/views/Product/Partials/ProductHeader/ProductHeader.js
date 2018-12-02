import React from 'react';
import StarRatings from 'react-star-ratings';
import { isArray } from 'util';

import './ProductHeader.css';

const header = (props) => {

    const product = props.product;
    let minPrice = 0.00, maxPrice = 0.00;

    if (isArray(product.baremList)) {
        const priceList = [...product.baremList.map(range => range.price)]
        minPrice = Math.min(...priceList);
        maxPrice = Math.max(...priceList);
    }

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
                <span>{minPrice + ' - ' + maxPrice + ' ' + product.currency}</span>
                <span className="subheader" style={{ padding: '0 8px' }}>/ Adet</span>
            </h4>
            <div>
                <span className="subheader">120 Adet (Minimum Sipariş Adedi)</span>
            </div>
        </header>
    )
};

export default header;