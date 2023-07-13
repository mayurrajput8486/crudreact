import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EmpEdit = () => {
   

    const navigate = useNavigate();
    const {empId} = useParams();
    useEffect(() => { 
        fetch('http://localhost:8000/employee/' + empId).then((response) => {
            return response.json();
        }).then((response) => {
            setId(response.id);
            setName(response.name);
            setEmail(response.email);
            setPhone(response.phone);
        }).catch((error) => {
            console.log(error);
        });
    }, [empId]);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        const empData = {id, name, email, phone};

        fetch('http://localhost:8000/employee/' + empId,{
            method:'PUT',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(empData)
        }).then((res) => {
            alert('Employee Updated Successfully!');
            navigate('/');
        }).catch((err) => {
            console.log(err);
        });
    }
    return(
        <>
            <div>
                <div className="row">
                    <div className="offset-lg-3 col-lg-6">
                        <form className="container" onSubmit={onSubmit}>
                            <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2>Update Employee</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Id</label>
                                            <input value={id} disabled="disabled" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input value={name} className="form-control" onChange={((e) => {setName(e.target.value);})} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} className="form-control" onChange={(e) => {setEmail(e.target.value);}} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input value={phone} className="form-control" onChange={(e) => {setPhone(e.target.value);}} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Update</button>
                                            <Link to={"/"} className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmpEdit;