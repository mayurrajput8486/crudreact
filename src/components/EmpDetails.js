import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetails = () => {
    const {empId} = useParams();
    const [empData, setEmpData] = useState({});

    useEffect(() => {
        fetch('http://localhost:8000/employee/' + empId).then((response) => {
            return response.json();
        }).then((response) => {
            setEmpData(response);
        }).catch((err) => {
            console.log(err);
        })
    },[empId])

    return(
        <>
            <h2>Employee Details</h2>
            
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{empData.name}</td>
                        <td>{empData.email}</td>
                        <td>{empData.phone}</td>
                    </tr>
                </tbody>
            </table>
            <Link to={'/'} className="btn btn-danger">Back</Link>
        </>
    );
}

export default EmpDetails;