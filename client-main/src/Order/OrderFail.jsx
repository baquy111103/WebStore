import React from 'react';
import PropTypes from 'prop-types';

OrderFail.propTypes = {
    
};

function OrderFail(props) {
    return (
        <div className="container fix_order">
            <h1>You've placed a failed order</h1>
            <span style={{ fontSize: '1.2rem' }}>Please check the Information again!</span>
        </div>
    );
}

export default OrderFail;