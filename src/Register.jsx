import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { createUser } from './utils/auth';

const Register = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleInputChange = (event) => {
    /* event.persist(); NO LONGER USED IN v.17*/
    event.preventDefault();

    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.lastName && values.email && values.password) {
      setValid(true);
      createUser(values);
      navigate('/login');
    }
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Create your account</h1>

      <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>
          {submitted && valid && (
            <div className="success-message">
              <h3>
                {' '}
                Welcome {values.firstName} {values.lastName}{' '}
              </h3>
              <div> Your registration was successful! </div>
            </div>
          )}
          {!valid && (
            <input
              className="form-field"
              type="text"
              placeholder="First Name"
              name="firstName"
              value={values.firstName}
              onChange={handleInputChange}
            />
          )}

          {submitted && !values.firstName && (
            <span id="first-name-error">Please enter a first name</span>
          )}

          {!valid && (
            <input
              className="form-field"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={values.lastName}
              onChange={handleInputChange}
            />
          )}

          {submitted && !values.lastName && (
            <span id="last-name-error">Please enter a last name</span>
          )}

          {!valid && (
            <input
              className="form-field"
              type="email"
              placeholder="Email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
            />
          )}

          {submitted && !values.email && (
            <span id="email-error">Please enter an email address</span>
          )}

          {!valid && (
            <input
              className="form-field"
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              onChange={handleInputChange}
            />
          )}

          {submitted && !values.email && <span id="password-error">Please enter a password</span>}
          {!valid && (
            <button className="form-field" type="submit">
              Register
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
