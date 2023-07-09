import React, { useState } from 'react';
import './Register.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationSuccessful, setRegistrationSuccessful] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSignUp = () => {
    // Perform validation
    if (name.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      setFormError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setFormError('Passwords do not match');
      return;
    }

    // Save data to local storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('confirmPassword', confirmPassword);

    // Show registration successful message
    setRegistrationSuccessful(true);
  };

  if (registrationSuccessful) {
    return (
      <div className='bgregister'>
        <div id='register' className='container'>
          <h1 className="text-success text-center align-bottom">Registration Successful!</h1>
        </div>
      </div>
    );
  }

  return (
    <div className='bgregister'>
      <div id='register' className='container'>
        <h1 className="text-white text-center mb-3">Sign Up</h1>

        {/* Input fields */}
        <FloatingLabel controlId="floatingName" label="Name" className="mb-3 text-bark">
          <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </FloatingLabel>

        <FloatingLabel controlId="floatingEmail" label="Email address" className="mb-3 text-dark">
          <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3 text-dark">
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FloatingLabel>

        <FloatingLabel controlId="floatingConfirmPassword" label="Confirm Password" className="mb-3 text-dark">
          <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </FloatingLabel>

        {formError && (
          <p className="text-danger text-center">{formError}</p>
        )}

        <div className="d-grid gap-2 col-6 mx-auto">
          <button type="button" className="btn btn-light btn-lg" onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
