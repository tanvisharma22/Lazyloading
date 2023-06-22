import React, { useState } from 'react';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      // Handle successful login or navigate to the next page
      navigate('/homepage');
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error and display an appropriate message to the user
      navigate('/');
    }
  };

  return (
    <div className='page'>
      <div className='form'>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
           <button className='button' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;


