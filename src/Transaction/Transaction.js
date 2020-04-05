import React from 'react';
import transaction from './transaction.json'
import TransactionLine from './TransactionLine'
import table from "./Transaction.module.css"


const Transaction = () => {
    console.log(transaction);
    return (
        <table className={table.transactions}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>

{transaction.map(el => {
    return (
        <TransactionLine
        key= {el.id}
        type= {el.type}
        amount= {el.amount}
        currency= {el.currency}
        />        
    )
})}

  </tbody>
</table>

    );
};

export default Transaction;