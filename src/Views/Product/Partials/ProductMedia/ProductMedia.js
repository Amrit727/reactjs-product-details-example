import React from "react";
import { isArray } from "util";
import classes from "./ProductMedia.css";

export const media = (props) => {
    let items = [];
    let selectedItem = null;

    // Iterate product variants if is an array
    if (props != null && isArray(props.variants)) {
        props.variants.forEach(variant => {

            // Iterate images if is an array
            if (isArray(variant.images)) {
                variant.images.forEach(url => {

                    // Create carousel items and push
                    items.push((
                        <div key={variant.id + '-' + url} className={classes['product-image-thumb']}>
                            <img src={url} alt="" />
                        </div>
                    ));
                })
            }
        });
    }

    if (items.length > 0) {
        selectedItem = selectedItem || items[0];

        return (
            <div className={classes['product-images']}>
                <div className={classes['product-image-big']}>
                    {selectedItem}
                </div>
                <div className={classes['product-image-thumbnails']}>
                    {items}
                </div>
            </div>
        )
    } else {
        return (
            <div>No Images</div>
        );
    }
}

export default media;
