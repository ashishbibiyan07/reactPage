import React from "react";
import web from "./image/img1.svg";
import "./App.css";
const App = () => {
  return (
    <>
      <div className="main-div">
        <div className="sign-up-container">
          <div className="sign-up-area">
            <div className="form">
              <form action="">
                <h1>sign up</h1>
                <input type="text" placeholder="Your name" />
                <input type="email" placeholder="Your Email" />
                <input type="number" placeholder="mobile number" />
                <input type="text" placeholder="Your profession" />
                <input type="password" placeholder="password" />
                <input type="password" placeholder="confirm password" />
                <button>Register</button>
              </form>
            </div>
            <div className="image">
              <img src={web} alt=".." className="animated" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
