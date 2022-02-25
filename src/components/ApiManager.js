export const existingLoginUserCheck = (email) => {
    return fetch(`http://localhost:8088/customers?email=${email}`)
        .then(res => res.json())
}

export const existingRegisterUserCheck = (customer) => {
    return fetch(`http://localhost:8088/customers?email=${customer.email}`)
        .then(res => res.json())
}

export const getEmployee = (employeeId) => {
    return fetch(`http://localhost:8088/employees/${employeeId}`)
        .then(res => res.json())
}

export const getEmployees = () => {
    return fetch("http://localhost:8088/employees")
        .then(res => res.json())
}

export const getAllCustomers = () => {
    return fetch("http://localhost:8088/customers")
        .then(res => res.json())
}

export const getTicket = (ticketId) => {
    return fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`)
                .then(response => response.json())
}

export const getTickets = () => {
    return fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
}

export const postCustomer = (customers) => {
    return fetch("http://localhost:8088/customers", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(customers)
    })
}
export const postEmployee = (employees) => {
    const fetchOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employees)
    }

    return fetch("http://localhost:8088/employees", fetchOption)
}

export const postNewTicket = (newTicket) => {
    const fetchOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTicket)
    }
    
    return fetch("http://localhost:8088/serviceTickets", fetchOption)
}

export const postUpdatedTicket = (ticketId, updatedTicket) => {
    return fetch(`http://localhost:8088/serviceTickets/${ticketId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedTicket)
        })
}

export const removeTicket = (id) => {
    return fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        })
} 