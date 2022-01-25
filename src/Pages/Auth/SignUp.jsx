import axios from "axios";
import React, { useState } from "react";
 import Swal from 'sweetalert2'
import { Link, useNavigate } from "react-router-dom";
import microsoft from "../../assents/images/microsoft.png";
import { StyledSignUp } from "./Auth.style";
// import {useHistory} from 'react-router-dom'

function SignUp() {
  // let history =useHistory();
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const { email, password, username } = user;
      if (email && password && username) {
        setLoading(true);
        const { data } = await axios.post('/auth/local/register', user);
        console.log(data);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'You have successfully registered',
          footer: `<a href="/">Home page</a>`
        });
        setLoading(false);
        localStorage.setItem('user', JSON.stringify(data.user))
        localStorage.setItem('token', data.jwt)
      } else {
        Swal.fire({
          icon: 'error',
          text: 'Please fill all required fields',
        });
      }

    } catch (error) {
      console.log(error.response.data)
      Swal.fire({
        icon: 'error',
        text: error.response?.data?.error?.message || 'Something went wrong',
      });
      setLoading(false);
    }
  }
  const { password, username, email } = user;
  return (
    <StyledSignUp>
      <div className="signin">
        <div className="sign-in__header">
          <img src={microsoft} alt="msoft" onClick={() => navigate("/")} />
          <h2>Sign Up</h2>
        </div>
        <div className="sign-in__body">
          <div className="sign-in__input-wrapper">
            {/* <label htmlFor="">Username/Email</label> */}
            <input
              onChange={handleInputChange}
              value={username}
              type="text"
              name="username"
              placeholder="Username"
            />
          </div>{" "}
          <div className="sign-in__input-wrapper">
            {/* <label htmlFor="">Username/Email</label> */}
            <input
              onChange={handleInputChange}
              type="text"
              value={email}
              name="email"
              placeholder="Email"
            />
          </div>{" "}
          <div className="sign-in__input-wrapper">
            {/* <label htmlFor="">Password</label> */}
            <input
              onChange={handleInputChange}
              value={password}
              type="text"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="sign-in__footer">
            <p>
              Have sccount? <Link to="/sign-in">Sign in now!</Link>
            </p>
          </div>
          <div className="sign-in__actions">
            <button onClick={handleSubmit}  disabled={loading} >{loading ? 'Creating...' : 'Sign up'}</button>
          </div>
        </div>
      </div>
    </StyledSignUp>
  );
}

export default SignUp;
