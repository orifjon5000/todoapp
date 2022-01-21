import React, { useState } from "react";
import Header from "../Component/Header";
import Main from "../Component/Main";
import Sidebar from "../Component/Sidebar";
import { StyledMainContenWrapper } from "./App.style";
import { Route,Routes } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";

export default function App() {
  const [isRed, setIsRed] = useState(false);
  const [isLogged, setIsLogged] = useState(false );
  const [user, setUser] = useState({
    id: null,
    username: "",
    email: "",
  });
  if (isLogged) {
    return (
      <div>
        <Header />
        <StyledMainContenWrapper>
          <Sidebar />
          <Main />
        </StyledMainContenWrapper>
      </div>
    )
  }return(
 <>
  {/* <Welcome/> */}
  <Routes>
    <Route path="/sign-in" element={<SignIn/>}/>
    <Route path="/sign-up" element={<SignUp/>}/>
    <Route path="/" element={<Welcome/>}/>
  </Routes>
 </>
    )
}
