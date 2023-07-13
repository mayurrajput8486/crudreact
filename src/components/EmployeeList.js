import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import getEmpData from "../service/EmpService";

const EmployeeList = () => {
    const [empData, setEmpData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => { 
        /* fetch('http://localhost:8000/employee').then((response) => {
            return response.json();
        }).then((response) => {
            setEmpData(response);
        }).catch((error) => {
            console.log(error);
        }); */
        getEmpData().then((response) => {
            setEmpData(response.data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const deleteEmp = (empId) => {
        if(window.confirm('Are you sure')){
            fetch('http://localhost:8000/employee/' + empId,{
                method:'DELETE'
            }).then((res) => {
                alert('Employee Deleted Successfully!');
                
                getEmpData().then((response) => {
                    setEmpData(response.data);
                }).catch((err) => {
                    console.log(err);
                });
                
               /*  getEmpData(); */
                /* window.location.reload(); */
                /* navigate('/'); */
                /* history('/'); */
            }).catch((err) => {
                console.log(err.message);
            });
        }        
    }

    const editEmp = (empId) => {
        navigate('/employee/edit/' + empId);
    }

    const viewEmp = (empId) => {
        navigate('/employee/details/' + empId);
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h3>Employee List</h3>
                    <Link to={'/employee/create'} className="btn btn-primary">Add New</Link>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                empData && empData.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            {/* <a onClick={() => {}} className="btn btn-success">Edit</a>
                                            <a onClick={() => {deleteEmp(item.id)}} className="btn btn-primary">View</a>
                                            <a onClick={() => {viewEmp(item.id)}} className="btn btn-danger">Delete</a> */}
                                        
                                            <button onClick={()=>{editEmp(item.id)}} className='btn btn-success'>Edit</button>
                                            <button onClick={()=>{deleteEmp(item.id)}} className='btn btn-danger'>Delete</button>
                                            <button onClick={()=>{viewEmp(item.id)}} className='btn btn-primary'>View</button>

                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmployeeList;