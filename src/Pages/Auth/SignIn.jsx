import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import microsoft from "../../assents/images/microsoft.png";
import { StyledSignIn } from "./Auth.style";
import Swal from "sweetalert2";
import axios from "../../utils/axios";

function SignIn() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    identifier: 'abdulkhamid@gmail.com',
    password: 'smoothing'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async () => {
    try {
      const { password, identifier } = user;
      if (password && identifier) {
        setLoading(true);
        const { data } = await axios.post("/auth/local", user);
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "You have successfully signed in",
          footer: `<a href="/">Home page</a>`,
        }).then((value) => {
          setLoading(false);
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.jwt);
          window.location.href = "/";
        });
      } else {
        Swal.fire({
          icon: "error",
          text: "Please fill all required fields",
        });
      }
    } catch(error) {
      console.log(error.response.data);
      Swal.fire({
        icon: "error",
        text: error.response?.data?.error?.message || "Something went wrong",
      });
      setLoading(false);
    }
  };
  const { password, identifier } = user;

  return (
    <StyledSignIn>
      <div className="signin">
        <div className='sign-in__header'>
          <img src={microsoft} alt="microsoft" onClick={() => navigate('/')} />
          <h2>Sign up</h2>
        </div>
        <div className="sign-in__body">
          <div className='sign-in__input-wrapper'>
            {/* <label htmlFor="">Username/Email</label> */}
            <input
              type="text"
              name="identifier"
              value={identifier}
              placeholder='Email/Username'
              onChange={handleInputChange}
            />
          </div>
          <div className='sign-in__input-wrapper'>
            {/* <label htmlFor="">Password</label> */}
            <input
              type="text"
              name="password"
              value={password}
              placeholder='Password'
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="sign-in__footer">
          <p>Not have an account? <Link to="/sign-up">Sign up!</Link> </p>
        </div>
        <div className="signin__actions">
          <button onClick={handleSubmit} disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </div>
      </div>
    </StyledSignIn>
  );
}

export default SignIn;
