import React, { useState, useEffect } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  useEffect(() => {
    // Retrieve login credentials from local storage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Update the input fields with stored values, if available
    if (storedEmail) {
      setEmail(storedEmail);
    }
    if (storedPassword) {
      setPassword(storedPassword);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store login credentials in local storage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    // Clear the input fields
    setEmail('');
    setPassword('');

    // Set login success state to true
    setLoginSuccess(true);
  };

  return (
    <div className='login'>
      <div className="container text-white p-4 text-center">
        <div>
          <form onSubmit={handleSubmit}>
            <div id="login" className="mb-1 has-bg-img">
              <h1 className='pb-3'>Login</h1>
              <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="exampleInputPassword1" className="form-label mt-1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button type="submit" className="btn btn-primary mt-4">Submit</button>

              {loginSuccess && <p>Login Successful</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
