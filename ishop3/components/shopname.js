import React from 'react';
import PropTypes from 'prop-types';

import './shopname.css';

class ShopNameTitle extends React.Component {

    //displayName: 'ShopNameTitle',

    static  propTypes = {
        shopName: PropTypes.string.isRequired,
        emptyShopName: PropTypes.string.isRequired,
        items:PropTypes.array,                  // если массив пустой - emptyShopName
    };

    render() {
        return (
            <div className = 'ShopName'>
                <h1 className="catalog_title">
                    {
                        (this.props.items.length === 0)
                            ? this.props.emptyShopName
                            : this.props.shopName
                    }
                </h1>
            </div>
        );
    }

}
export default ShopNameTitle;