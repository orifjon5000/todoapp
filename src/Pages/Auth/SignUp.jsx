import React from 'react'
import { Link } from 'react-router-dom'
import microsoft from '../../assents/images/microsoft.png'
import { StyledSignUp } from './Auth.style'
// import {useHistory} from 'react-router-dom'

function SignUp() {
    // let history =useHistory();


    return (
        <StyledSignUp>
        <div className="signin">
        <div className="sign-in__header">
           <img src={microsoft} alt="msoft" />
           <h2>Sign Up</h2>
         </div>
         <div className="sign-in__body">
           <div className="sign-in__input__wrapper">
             {/* <label htmlFor="">Username/Email</label> */}
             <input type="text" name="username" placeholder="Username" />
           </div>{" "}
           <div className="sign-in__input__wrapper">
             {/* <label htmlFor="">Username/Email</label> */}
             <input type="text" name="email" placeholder="Email" />
           </div>{" "}
           <div className='sign-in__input-wrapper'>
             {/* <label htmlFor="">Password</label> */}
             <input type="text" name="Password" placeholder="Password" />
           </div>
           <div className="sign-in__footer">
             <p>Have sccount? <Link to="/sign-up">Sign in now!</Link></p>
           </div>
           <div className="sign-in__actions">
               <button>Sign Up</button>
           </div>
         </div>
        </div>
       </StyledSignUp>
    )
}

export default SignUp