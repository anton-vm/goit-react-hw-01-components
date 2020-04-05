import React from 'react';
import PropTypes from 'prop-types'

const TransactionLine = ({type, amount, currency}) => {
    return (
        <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );

    TransactionLine.propTypes = {
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
    }
};

export default TransactionLine;