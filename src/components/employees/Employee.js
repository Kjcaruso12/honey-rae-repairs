import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { getEmployee } from "../ApiManager"

export const Employee = () => {
    const [employee, assignEmployee] = useState({})

    const { employeeId } = useParams()


    useEffect(
        () => {
        getEmployee(employeeId)
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