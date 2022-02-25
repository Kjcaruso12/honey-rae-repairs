import React, { useEffect, useState } from "react"
import { getAllCustomers } from "../ApiManager"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            getAllCustomers()
                .then((customers) => {
                    setCustomers(customers)
                })
        },
        []
    )

    return (
        <>
            {
                customers.map(
                    (customerObject) => {
                        return <p key={`customer--${customerObject.id}`}>{customerObject.first_name} {customerObject.last_name}</p>
                    }
                )
            }
        </>
    )
}