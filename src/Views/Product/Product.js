import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Product.css';
import productData from '../../assets/static/product-data.json';

import ProductMedia from './Partials/ProductMedia/ProductMedia';
import { fetchProduct } from '../../store/actions';

class Product extends Component {

    componentDidMount() {
        this.props.fetchProduct(productData);
    }

    render() {
        return (
            <div className={classes.product}>
                <section className={classes['media-section']}>
                    <ProductMedia variants={this.props.filteredVariants} />
                </section>
                <section className={classes['details-section']}>
                   Product
                </section>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        priceRange: state.priceRange,
        filteredVariants: state.filteredVariants
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProduct: (product) => dispatch(fetchProduct(product))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);