import React, { lazy, useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AppContext from "../Context/AppContext";
import { StyledMainContenWrapper } from "./App.style";

const Header = lazy(() => import("../Component/Header"));
const Main = lazy(() => import("../Component/Main"));
const Sidebar = lazy(() => import("../Component/Sidebar"));
const Welcome = lazy(() => import("./Welcome/Welcome"));
const SignIn = lazy(() => import("./Auth/SignIn"));
const SignUp = lazy(() => import("./Auth/SignUp"));

export default function App() {
  const [user, setUser] = useState(()=>JSON.parse(localStorage.user||"{}"));
  const token=localStorage.token;
  
  const signOut = ()=>{
    try{
      setUser({});
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }catch(error){
      console.log(error);
      
    }
  }

  if (token && user?.id) {
    return (
      <AppContext.Provider value= {{user,token,signOut}}>
        <Suspense fallback="Loading..." >
      <div>
        <Header />
        <StyledMainContenWrapper>
          <Sidebar />
          <Main />
        </StyledMainContenWrapper>
      </div>
      </Suspense>
      </AppContext.Provider>
    );
  }
  return (
    <>
      <Suspense fallback="Loading...">
      
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
      </Suspense>
    </>
  );
}
