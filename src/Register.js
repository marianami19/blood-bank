import React, { useState, useEffect } from "react";

function Register() {
    const [section, setSection] = useState('');

    return (
        <div className="m-auto">
            <div className="d-flex align-items-center">
                <span className="display-5"> Are you a </span>
                <div className="mx-4" onChange={e => setSection(e.target.value)}>
                    <input type="radio" className="btn-check" name="options" id="Hospital" autoComplete="off"
                        value="Hospital" />
                    <label className="btn btn-secondary " htmlFor="Hospital">Hospital</label>
                    <span className="mx-3">OR</span>

                    <input type="radio" className="btn-check" name="options" id="Receipient" autoComplete="off" value="Receiver" />
                    <label className="btn btn-secondary" htmlFor="Receipient">Receipient</label><span className="display-5">?</span>
                </div>
            </div>

            {section == 'Hospital' ? <Hospital></Hospital> : section == 'Receiver' ? <Receipient></Receipient> : ''}
        </div>
    );
}


function Hospital() {
    return (
        <div>
            Hospital
            <form>


                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="exampleInputPassword2" className="form-label">Re-Enter Password</label>
                        <input type="password"

                            className="form-control" id="exampleInputPassword2" required />
                    </div>
                </div>
                <button type="submit" className="btn btn-secondary my-3">Submit</button>
            </form>
        </div>
    )
}
function Receipient() {
    return (
        <div>
            Receipient
            <form>


                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="exampleInputPassword2" className="form-label">Re-Enter Password</label>
                        <input type="password"

                            className="form-control" id="exampleInputPassword2" required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="blood" className="form-label">Blood Group</label>
                        <select className="form-select" id="blood" aria-label="Default select example" required>
                            <option defaultValue>Select your blood group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div>

                </div>
                <button type="submit" className="btn btn-secondary my-3">Submit</button>
            </form>
        </div>
    )
}

export default Register;
