import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { getTickets, removeTicket } from "../ApiManager"
import "./Tickets.css"

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const history = useHistory()
    const deleteTicket = (id) => {
        removeTicket(id)
        const copy = tickets.filter(ticket => {
            return ticket.id != id
        })
        updateTickets(copy)
    }      
    
    useEffect(
        () => {
            getTickets()
                .then((tickets) => {
                    updateTickets(tickets)
                })
        },
        []
    )



    return (
        <>
            <div>
                <button onClick={() => history.push("/serviceTickets/create")}>Create Ticket</button>
            </div>
            <div>
                <p>There are {tickets.length} open tickets</p>
            </div>
            {
                tickets.map(
                    (ticket) => {
                        return <div key={`ticket--${ticket.id}`}>
                            <p className={ticket.emergency ? "emergency" : `ticket`}>
                                {ticket.emergency ? "🚑" : ""}
                                <Link to={`./serviceTickets/${ticket.id}`}>{ticket.description}</Link> submitted by {ticket.customer.first_name} {ticket.customer.last_name}
                                and worked on by {ticket.employee.first_name} {ticket.employee.last_name}
                                <button onClick={() => {
                                deleteTicket(ticket.id)
                            }}>Delete</button>
                            </p>
                        </div>

                    }
                )
            }
        </>
    )
}