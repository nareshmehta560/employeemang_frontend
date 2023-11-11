import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { Link } from "react-router-dom";


const ListEmployeeComonent = () => {
    const [employees,setEmployees] = useState([])

    useEffect(()  => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        },[])
    })
    return (
        <div className = "container">
            <h2 className = "text-center">List of Employees</h2>
            <Link to = "/add-employee" className="btn btn-primary mb-2"> add Employee </Link>
            <table className = "table table-bordered table-striped">
                <thead>
                    <th> Employee Id</th>
                    <th> Employee First Name</th>
                    <th> Employee Last Name</th>
                    <th> Employee Email Id</th>
                </thead>
                <tbody>
                    {
                        employees.map(
                            emloyee => 
                            <tr key = {employees.id}>
                                <td> {emloyee.id}</td>
                                <td> {emloyee.firstName}</td>
                                <td> {emloyee.lastName}</td>
                                <td> {emloyee.emailId}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}
export default ListEmployeeComonent;