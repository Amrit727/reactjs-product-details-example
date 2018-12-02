import React, { Component } from 'react';
import { connect } from 'react-redux';

import productData from '../../assets/static/product-data.json';
import { fetchProduct } from '../../store/actions';
import './Product.css';

import ProductMedia from './Partials/ProductMedia/ProductMedia';
import ProductHeader from './Partials/ProductHeader/ProductHeader';
import ProductFilters from './Partials/ProductFilters/ProductFilters';
import ProductPricing from './Partials/ProductPricing/ProductPricing';
import ProductFooter from './Partials/ProductFooter/ProductFooter';

class Product extends Component {

    componentDidMount() {
        this.props.fetchProduct(productData);
    }

    render() {
        return (
            <div className="product">
                <section className="media-section">
                    <ProductMedia />
                </section>
                <section className="details-section">
                    <ProductHeader product={this.props.product} />
                    <ProductFilters />
                    <ProductPricing />
                    <ProductFooter summary={this.props.summary} currency={this.props.product.currency} />
                </section>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        product: state.product,
        summary: state.summary
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProduct: (product) => dispatch(fetchProduct(product))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);