import React from 'react'
import PropTypes from 'prop-types'
import { Transaction } from './Transaction'

export const TransactionHistory = ( {items} ) => {
    return (
        <table className="transaction-history">
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(transaction => (
                    <tr key={transaction.id}>
                        <Transaction 
                            type={transaction.type}
                            amount={transaction.amount}
                            currency={transaction.currency}
                        />
                    </tr>
                ))}   
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}
