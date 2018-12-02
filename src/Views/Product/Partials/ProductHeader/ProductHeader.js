import React from 'react';

const header = (props) => {

    const product = props.product;

    return (
        <div className="product-header">
            <h2>{product.title}</h2>
            <span>{
                product.price != null
                    ? product.price.value + ' ' +product.price.currency
                    : null
            }
            </span>
        </div>
    )
};

export default header;