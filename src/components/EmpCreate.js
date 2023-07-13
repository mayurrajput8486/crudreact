import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpCreate = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const empData = {name, email, phone};
        console.log(empData);
        fetch('http://localhost:8000/employee',
        {
            method:'POST',
            headers:{"content-type":"application/json"},
            body:JSON.stringify(empData)
        }).then((res) => {
            alert('Employee Added Successfully!');
            navigate('/');
        }).catch((err) => {
            console.log(err);
        });
    }

    return(
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={onSubmit}>
                        <div className="card" style={{ "textAlign": "left" }}>
                           <div className="card-title">
                               <h2>Create Employee</h2>
                           </div>
                           <div className="card-body">
                               <div className="row">
                                   <div className="col-lg-12">
                                       <div className="form-group">
                                           <label>Id</label>
                                           <input disabled="disabled" className="form-control" />
                                       </div>
                                   </div>
                                   <div className="col-lg-12">
                                       <div className="form-group">
                                           <label>Name</label>
                                           <input className="form-control" onChange={((e) => {setName(e.target.value);})} />
                                       </div>
                                   </div>
                                   <div className="col-lg-12">
                                       <div className="form-group">
                                           <label>Email</label>
                                           <input className="form-control" onChange={(e) => {setEmail(e.target.value);}} />
                                       </div>
                                   </div>
                                   <div className="col-lg-12">
                                       <div className="form-group">
                                           <label>Phone</label>
                                           <input className="form-control" onChange={(e) => {setPhone(e.target.value);}} />
                                       </div>
                                   </div>
                                   <div className="col-lg-12">
                                       <div className="form-group">
                                           <button className="btn btn-success" type="submit">Save</button>
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
    );
}

export default EmpCreate;