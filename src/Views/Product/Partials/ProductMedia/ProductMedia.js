import React from "react";
import { isArray } from "util";
import { UncontrolledCarousel } from 'reactstrap';
import './ProductMedia.css';

const media = (props) => {
    let items = [];

    // Iterate product variants if is an array
    if (props != null && isArray(props.variants)) {
        props.variants.forEach(variant => {

            // Iterate images if is an array
            if (isArray(variant.images)) {
                variant.images.forEach((url, index) => {
                   items.push({
                        src: url + '?key=' + Math.random(),
                        altText: '',
                        caption: '',
                        header: ''
                   })
                })
            }
        });
    }

    if (items.length > 0) {
       return <UncontrolledCarousel items={items} />;
    } else {
        return (
            <div>No Images</div>
        );
    }
}

export default media;
