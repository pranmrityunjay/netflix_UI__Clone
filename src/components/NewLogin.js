import React from 'react';

const NewLogin = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Creating Google OAuth 2 with Passportjs</h1>
      <a href="/auth/google">Login with Google</a>

      <div className="form-container">
        <h2 className="login">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name </label>
            <input type="text" id="name" name="username" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password </label>
            <input type="password" id="password" name="password" placeholder="Enter password" />
          </div>

          <button type="submit" className="submit-btn">Login</button>
        </form>
        <p>Don't have an account <a href="/signup">Signup</a></p>
      </div>
    </div>
  );
};

export default NewLogin;
