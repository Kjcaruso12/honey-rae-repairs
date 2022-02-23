import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"

export const Ticket = () => {
    const [ticket, assignTicket] = useState({})

    const { ticketId } = useParams()


    useEffect(
        () => {
            return fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`)
            .then(res => res.json())
            .then(assignTicket)
        },
        [ticketId]
    )

    return (
        <>
            <h2>Ticket Details</h2>
            <section className="ticket">
                <h3 className="ticket_description">{ticket.description}</h3>
                <div className="ticket_customer">Submitted by {ticket.customer?.first_name} {ticket.customer?.last_name}</div>
                <div className="ticket_employee">Assigned to {ticket.employee?.first_name} {ticket.employee?.last_name}</div>
            </section>
        </>
    )
}