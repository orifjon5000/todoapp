import React from "react";
import { Link, useNavigate } from "react-router-dom";
import microsoft from "../../assents/images/microsoft.png";
import { StyledSignIn } from "./Auth.style";
// import {useHistory} from 'react-router-dom'

function SignIn() {
  // let history =useHistory();
let navigate= useNavigate()
  return (
    <StyledSignIn>
     <div className="signin">
     <div className="sign-in__header">
        <img src={microsoft} alt="msoft"  onClick={()=>navigate('/')}/>
        <h2>Sign In</h2>
      </div>
      <div className="sign-in__body">
        <div className="sign-in__input-wrapper">
          {/* <label htmlFor="">Username/Email</label> */}
          <input type="text" name="identidier" placeholder="Email/Username" />
        </div>{" "}
        <div className='sign-in__input-wrapper'>
          {/* <label htmlFor="">Password</label> */}
          <input type="text" name="Password" placeholder="Password" />
        </div>
        <div className="sign-in__footer">
          <p>No Account? <Link to="/sign-up">Create one!</Link></p>
        </div>
        <div className="sign-in__actions">
            <button>Sign in</button>
        </div>
      </div>
     </div>
    </StyledSignIn>
  );
}

export default SignIn;
