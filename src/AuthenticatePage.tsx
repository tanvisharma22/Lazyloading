import React, { useState, FormEvent } from 'react';
import { auth } from './firebase';
import { Link } from 'react-router-dom';
import './App.css';

const AuthenticatePage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      // Handle successful signup or navigate to the next page
    } catch (error: any) {
      console.error('Signup failed:', error);
      // Handle signup error and display an appropriate message to the user
    }
  };

  return (
    <div className='page'>
      <div className='form'>
        <h2>Signup</h2>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <button className='button' type="submit">Signup</button>
          
          <div className='link1'>Already a member? <Link to='/login'>Login</Link></div>
          <div className='link1'>Forgot Password?<Link to='/resetpassword'>Reset Password</Link></div>
        </form>
      </div>
    </div>
  );
}

export default AuthenticatePage;


