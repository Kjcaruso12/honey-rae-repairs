import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import "./Tickets.css"

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const history = useHistory()
    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        })
        const copy = tickets.filter(ticket => {
            return ticket.id != id
        })
        updateTickets(copy)
        }      
    
    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((data) => {
                    updateTickets(data)
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