import React from 'react';
import './App.css';

function App() {
  return (
    <body>
      <div className="Left_Columm">
        <h1>Learn to code by</h1>
        <h1>watching others</h1>

        <p>See how experienced developers solve problems in real-time.
        Watching scripted tutorials is great, but understanding how
        developers think is invaluable.</p>
      </div>
      <div className="Right_Column">
        <div className="try-message">
          <p>Try it free 7 days the $20/mo. thereafter</p>
        </div>

        <div className="form-box">
          <form className="form-group">
            <input type="text" name="firstName" id="firstName" placeholder="First Name" />
            <input type="text" name="lastName" id="lastName" placeholder="Last Name" />
            <input type="email" name="email" id="email" placeholder="Email Address" />
            <input type="password" name="password" id="password" placeholder="Password" />

            <button type="submit">claim your free trial</button>
            <p>By clicking the button you are agreeing to out <a href="#">Terms and Services</a></p>
          </form>
        </div>
      </div>
    </body>
  );
}

export default App;
