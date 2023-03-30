
function Login() {
    return (
        <div className="container">
            <h1 className='display-6 text-center'>Login</h1>
            <form>
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" required />
                <button type="submit" className="btn btn-secondary my-3">Submit</button>
                {/* refister */}
            </form>
        </div>
    );
}

export default Login;
