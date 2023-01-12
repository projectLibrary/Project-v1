import { React, useState } from "react";
import { login, loginWithOtp } from "../../../Services/accountsService";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css";
import { Alert } from 'react-bootstrap'
function  Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [otp, setOtp] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const navigate = useNavigate();

  async function handleFormSubmit(e) {
    e.preventDefault();
    var res = await loginWithOtp({
      email: email,
      password: password,
      // otp: otp,
    });
    console.log(res);
    if (res.success) {
      alert("Success");
      window.location.href='/user/bookIndex'
    }
    
    if (!res.success) {
      console.log("The code reached here...")
      alert("OTP entered is wrong")
      return;
    }

    localStorage.setItem("token", res.data);
    setLoggedIn(true);
    navigate("/");
  }

  async function checkLogin(e) {
    var res = await login({
      email: email,
      password: password,
    });
    console.log("This is res", res)
    if (!res.success) {
      alert("OTP Not sent")
    }

    if (res.success) {
      alert("Success")
    }
  }

  return (
    <div className="register">
      <div className="screen">
        <div className="screen__content">
          <form className="logincontainer" onSubmit={handleFormSubmit}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <label htmlFor="email">Email address</label>
              <input

                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                // required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <label htmlFor="password">Password</label>
              <input
                required
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"

                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Click to get OTP */}
            <br></br>
            <button type="button" className="btn btn-warning" onClick={checkLogin}>
              Request OTP
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
            {/* Ends */}
            <div id="otp-field">
              <div className="login__field">
                <i className="login__icon fas fa-lock"></i>
                <label htmlFor="otp" >Otp</label>
                <input
                  type="text"
                  className="form-control"
                  id="otp"

                  placeholder="OTP"
                  // onChange={(e) => setOtp(e.target.value)}
                // required
                />
              </div>
              <br></br>
              <button type="submit" className="btn btn-primary" >
                Submit
                <i className="button__icon fas fa-chevron-right"></i>
              </button>
              <p style={{ fontWeight: "bold", paddingTop: "10px" }}>

                Not a User{" "}

                <Link to="/register" style={{ textDecoration: "none" }}>

                  Sign-Up

                </Link>

              </p>
              {/* <button className="btn btn-info" ahref = '/register'>Sign-Up</button> */}
            </div>

            {errorMessage && (
              <div className="alert alert-danger mt-2">{errorMessage}</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
