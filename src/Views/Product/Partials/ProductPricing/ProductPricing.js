import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input } from 'reactstrap';

import './ProductPricing.css';
import { setPriceRange } from '../../../../store/actions';
import { isArray } from 'util';

class ProductPricing extends Component {

    resetPriceRange() {
        this.props.setPriceRange({
            minimumQuantity: 0,
            maximumQuantity: 0,
            price: 0.00
        });
    }

    pricingInputChangeHandler(event) {
        const value = event.target.value;

        if (value != null && value !== '' && isArray(this.props.product.baremList)) {
            let isPriceRangeSet = false;
            
            const range = [...this.props.product.baremList].sort((a, b) => {
                if (a.maximumQuantity < b.maximumQuantity)
                    return -1;
                if (a.maximumQuantity > b.maximumQuantity)
                    return 1;
                return 0;
            });

            range.forEach(barem => {
                if (value >= barem.minimumQuantity && value <= barem.maximumQuantity) {
                    this.props.setPriceRange(barem);
                    isPriceRangeSet = true;
                }
            });

            if (!isPriceRangeSet) {
                if (value > range[range.length - 1].maximumQuantity) {
                    this.props.setPriceRange(range[range.length - 1]);
                } else {
                    this.resetPriceRange();
                }
            }
        } else {
            this.resetPriceRange();
        }
    }

    pricingInputKeypressHandler(event) {
        let key = '';

        // Handle paste
        if (event.type === 'paste') {
            key = event.clipboardData.getData('text/plain');
        } else {
            // Handle key press
            key = event.keyCode || event.which;
            key = String.fromCharCode(key);
        }

        const regex = /[0-9]|\./;

        if (!regex.test(key)) {
            event.returnValue = false;
            if (event.preventDefault) event.preventDefault();
        }
    }

    render() {
        if (isArray(this.props.product.baremList)) {
            const currentPriceRange = this.props.priceRange;

            // Generate range boxes
            const pricingRanges = this.props.product.baremList.map((barem, index, array) => {
                let className = 'pricing-range';

                if (currentPriceRange.price === barem.price) {
                    className += ' active';
                }

                return (
                    <div className={className} key={'range-' + index}>
                        <div>{barem.minimumQuantity} - {barem.maximumQuantity} {array.length === index + 1 ? '+' : ''}</div>
                        <div>{barem.price}</div>
                    </div>
                );
            });

            // Make it happen
            return (
                <div className="product-pricing">
                    <div className='pricing-group'>
                        <div className="pricing-group-name">Toptan Fiyat <br /> (Adet)</div>
                        <div className="pricing-group-content">
                            {pricingRanges}
                        </div>
                    </div>
                    <div className='pricing-group'>
                        <div className="pricing-group-name">Adet</div>
                        <div className="pricing-group-content">
                            <div className="pricing-range-input">
                                <Input onChange={this.pricingInputChangeHandler.bind(this)} onKeyPress={this.pricingInputKeypressHandler} max="500" min="1" />
                                <span>Adet</span>
                            </div>
                            <span>Stok Adedi: 500</span>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (<div>Fiyat aralık bilgisine ulaşılamadı.</div>);
        }
    }
}

const mapStateToProps = state => {
    return {
        product: state.product,
        priceRange: state.priceRange
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPriceRange: (product) => dispatch(setPriceRange(product))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPricing);