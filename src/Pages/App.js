import React from "react";
import Header from "../Component/Header";
import Main from "../Component/Main";
import Sidebar from "../Component/Sidebar";
import { StyledMainContenWrapper } from "./App.style";
export default function App() {
  return (
    <div>
      <Header />
      <StyledMainContenWrapper>
        <Sidebar />
        <Main />
      </StyledMainContenWrapper>
    </div>
  );
}
