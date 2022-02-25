import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { getEmployees, getTicket, postUpdatedTicket } from "../ApiManager"

export const Ticket = () => {
    const [ticket, assignTicket] = useState({})  // State variable for current ticket object
    const [employees, syncEmployees] = useState([])  // State variable for array of employees
    const { ticketId } = useParams()  // Variable storing the route parameter
    const history = useHistory()


    // Fetch the individual ticket when the parameter value changes
    useEffect(
        () => {
            getTicket(ticketId)
                .then((data) => {
                    assignTicket(data)
                })

        },
        [ticketId]  // Above function runs when the value of ticketId change
    )

    // Fetch all employees
    useEffect(
        () => {
            getEmployees()
                .then(syncEmployees)
        },
        []  // Empty dependency array only reacts to JSX initial rendering
    )

    // Function to invoke when an employee is chosen from <select> element
    const assignEmployee = (evt) => {

        // Construct a new object to replace the existing one in the API
        const updatedTicket = {
            customerId: ticket.customerId,
            employeeId: parseInt(evt.target.value),
            description: ticket.description,
            emergency: ticket.emergency,
            dateCompleted: ticket.dateCompleted
        }

        // Perform the PUT HTTP request to replace the resource
        postUpdatedTicket(ticketId, updatedTicket)
            .then(() => {
                history.push("/serviceTickets")
            })
    }

    return (
        <>
            <section className="ticket">
                <h3 className="ticket__description">{ticket.description}</h3>
                <div className="ticket__customer">Submitted by {ticket.customer?.first_name} {ticket.customer?.last_name}</div>
                <div className="ticket__employee">Assigned to
                    <select
                        value={ticket.employeeId}
                        onChange={assignEmployee}>
                        {
                            employees.map(employee => <option key={`employee--${employee.id}`} value={employee.id}>{employee.first_name} {employee.last_name}</option>)
                        }
                    </select>
                </div>
            </section>
        </>
    )
}
