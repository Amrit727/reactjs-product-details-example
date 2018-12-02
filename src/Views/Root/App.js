import React, { Component } from 'react';
import './App.css';
import Product from '../Product/Product';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Product />
            </div>
        );
    }
}

export default App;
