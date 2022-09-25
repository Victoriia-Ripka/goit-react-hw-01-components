import React from 'react'
import PropTypes from 'prop-types'
import { Transaction } from './Transaction'
import { Table, Head, Th, Tr } from './TransactionHistory.styled'

export const TransactionHistory = ( {items} ) => {
    return (
        <Table>
            <Head>
                <tr>
                    <Th>Type</Th>
                    <Th>Amount</Th>
                    <Th>Currency</Th>
                </tr>
            </Head>
            <tbody>
                {items.map(transaction => (
                    <Tr key={transaction.id}>
                        <Transaction 
                            type={transaction.type}
                            amount={transaction.amount}
                            currency={transaction.currency}
                        />
                    </Tr>
                ))}   
            </tbody>
        </Table>
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
