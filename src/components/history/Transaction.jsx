import React from "react"


export const Transaction = ( {type, amount, currency} ) => {
    return (
        <>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </>
    )
}
