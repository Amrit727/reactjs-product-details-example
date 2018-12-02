import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';

import { filterVariants } from "../../../../store/actions";

class ProductFilters extends Component {
    render() {
        return (
            <div className="product-filters">
                <ButtonToolbar>
                    <ButtonGroup>
                        <Button>1</Button>
                        <Button>2</Button>
                        <Button>3</Button>
                        <Button>4</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button>5</Button>
                        <Button>6</Button>
                        <Button>7</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button>8</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        product: state.product
    };
};

const mapDispatchToProps = dispatch => {
    return {
        filterVariants: filter => dispatch(filterVariants(filter))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductFilters);
