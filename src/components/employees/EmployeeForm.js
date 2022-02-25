import React, { useState } from "react"
import { postEmployee } from "../ApiManager";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const EmployeeForm = () => {
    const [employees, update] = useState([]);
    const history = useHistory()

    const saveEmployee = (event) => {
        event.preventDefault()
        postEmployee(employees)
        .then(() => {
            history.push("/employees")
        })
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">First Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name of employee"
                        onChange={
                            (evt) => {
                                const copy = {...employees}
                                copy.first_name = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Last Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name of employee"
                        onChange={
                            (evt) => {
                                const copy = {...employees}
                                copy.last_name = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="specialty">Specialty:</label>
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Technical specialty"
                        onChange={
                            (evt) => {
                                const copy = {...employees}
                                copy.specialty = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={saveEmployee}>
                Hire Employee
            </button>
        </form>
    )
}