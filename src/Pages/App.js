import React, { lazy, useState, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { StyledMainContenWrapper } from "./App.style";

const Header = lazy(() => import("../Component/Header"));
const Main = lazy(() => import("../Component/Main"));
const Sidebar = lazy(() => import("../Component/Sidebar"));
const Welcome = lazy(() => import("./Welcome/Welcome"));
const SignIn = lazy(() => import("./Auth/SignIn"));
const SignUp = lazy(() => import("./Auth/SignUp"));

export default function App() {
  const [isRed, setIsRed] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({
    id: null,
    username: "",
    email: "",
  });
  if (isLogged) {
    return (
      <Suspense fallback="Loading..." >
      <div>
        <Header />
        <StyledMainContenWrapper>
          <Sidebar />
          <Main />
        </StyledMainContenWrapper>
      </div>
      </Suspense>
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
