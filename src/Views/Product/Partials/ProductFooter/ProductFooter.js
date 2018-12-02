import React from 'react';
import { Button } from 'reactstrap';

import './ProductFooter.css';

const footer = (props) => {
    return (
        <footer className="product-footer detail-container">
            <b className="product-footer-title detail-title">Toplam</b>
            <div className="product-summary detail-block">
                <h3>{parseFloat(props.summary).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} {props.currency}</h3>
                <div>
                    <i className="fal fa-truck" /> Kargo ücreti: <a href="/">Alıcı öder</a>
                </div>
                <div className="product-actions mt-16">
                    <div className="product-action">
                        <Button color="warning" size="lg" block>SEPETE EKLE</Button>
                    </div>
                    <div className="product-action pl-16">
                        <a href="/">Ödeme Seçenekleri</a>
                    </div>    
                </div>
            </div>
        </footer>
    );
}

export default footer;