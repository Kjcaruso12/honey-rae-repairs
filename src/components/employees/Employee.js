import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"

export const Employee = () => {
    const [employee, assignEmployee] = useState({})

    const { employeeId } = useParams()


    useEffect(
        () => {
            return fetch(`http://localhost:8088/employees/${employeeId}`)
            .then(res => res.json())
            .then(assignEmployee)
        },
        [employeeId]
    )

    return (
        <>
            <section className="employee">
                <h3 className="employee_name">{employee?.first_name} {employee?.last_name}</h3>
                <div className="employee_specialty">Specialty is {employee.specialty}</div>
            </section>
        </>
    )
}