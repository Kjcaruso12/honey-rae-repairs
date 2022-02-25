import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { getEmployees } from "../ApiManager"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [specialties, changeSpecialties] = useState([])

    const history = useHistory()

    useEffect(
        () => {
            getEmployees()
                .then((employees) => {
                    changeEmployee(employees)
                })
        },
        []
    )

    useEffect(
        () => {
            const specialtiesArray = employees.map((employee) => {
                return employee.specialty
            })
            changeSpecialties(specialtiesArray.join(", "))

            /*
                1. Use .map() to get the specialty of each employee
                2. Then update a state variable to be a comma-separated string
                    (e.g. "iPhone, Printers, ...")
            */
        }, [employees])

    return (
        <>
            <div>
                <button onClick={() => history.push("/employees/create")}>Hire Employee</button>
            </div>
            <div>
                Specialties: {specialties}
            </div>
            {
                employees.map(
                    (employee) => {
                        return <div key={`employee--${employee.id}`}>
                            <p><Link to={`./employees/${employee.id}`}>{employee.first_name} {employee.last_name}</Link></p>
                        </div>
                    }
                )
            }
        </>
    )
}