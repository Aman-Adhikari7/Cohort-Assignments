import React, { useState } from 'react';
import AuthSystem from './AuthSystem';

const Login = () => {
  const [name, setName] = useState('');
  const [showAuth, setShowAuth] = useState(false);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => setShowAuth(true)}>
        Submit Name
      </button>

      {showAuth && <AuthSystem name={name} />}
    </div>
  );
};

export default Login;
