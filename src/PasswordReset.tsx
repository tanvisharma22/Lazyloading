import React, { useState } from 'react';
import { auth } from './firebase';
import { Link } from 'react-router-dom';

const PasswordReset: React.FC = () => {
  const [email, setEmail] = useState('');
  const [resetError, setResetError] = useState<string | null>(null);
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await auth.sendPasswordResetEmail(email);
      setResetError(null);
      setResetSuccess(true);
    } catch (error: any) {
      setResetError(error.message);
      setResetSuccess(false);
    }
  };

  return (
    <div className='page'>
      <div className='form'>
        <h2>Reset Password</h2>
        {resetError && <p>{resetError}</p>}
        {resetSuccess ? (
          <p>Password reset email sent. Please check your inbox for further instructions.  <Link to='/login'>LogIn</Link></p>
        )   : (
          <form onSubmit={handleResetPassword}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='email address'
            />
            <button className='button' type="submit">Reset</button>
          
          </form>
        )}
      </div>
    </div>
  );
};

export default PasswordReset;






