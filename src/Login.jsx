import { useState } from 'react';
// import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { authenticate } from './utils/auth';

function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const valid = false;

  const handleInputChange = (event) => {
    /* event.persist(); NO LONGER USED IN v.17*/
    event.preventDefault();

    const { name, value } = event.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  async function handleLogin(e) {
    e.preventDefault();
    try {
      // const requestBody = {email, password};
      // const response = await axios.post('https://api.p2.lc2s5.foxhub.space/login', requestBody);
      console.log(`email: ${email} password: ${password}`);

      if (authenticate(email, password)) {
        navigate('/');
        return;
      }
    } catch (error) {
      console.error(error);
    }

    setSubmitted(true);
  }

  return (
    <div>
      <h1>Login to your account</h1>
      <div className="form-container">
        <form className="register-form" onSubmit={handleLogin}>
          {!valid && (
            <input
              className="form-field"
              type="text"
              placeholder="email"
              name="email"
              autoComplete="current-email"
              onChange={handleInputChange}
            />
          )}

          {submitted && !email && <span id="email-error">Please enter an email</span>}

          {!valid && (
            <input
              className="form-field"
              type="password"
              placeholder="password"
              name="password"
              autoComplete="current-password"
              onChange={handleInputChange}
            />
          )}

          {submitted && !password && <span id="last-name-error">Please enter a password</span>}

          {!valid && (
            <button className="form-field" type="submit">
              Login
            </button>
          )}
        </form>
        <button className="form-field" onClick={() => navigate('/register')}>
          Register
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
