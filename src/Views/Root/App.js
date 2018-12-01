import React, { Component } from 'react';
import classes from './App.css';
import Product from '../Product/Product';

class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <Product />
            </div>
        );
    }
}

export default App;
