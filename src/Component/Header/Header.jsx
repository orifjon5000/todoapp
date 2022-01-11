import React from "react";
import { StyledHeader } from "./Header.style";
import {IoSettingsOutline} from 'react-icons/io5'
import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineNotification,AiOutlineUser } from "react-icons/ai";
import { BiQuestionMark } from "react-icons/bi";
import { pxToRem } from "../../utils";

export default function Header() {
  return (
    <StyledHeader>
      <div className="grid-wrapper">
        <CgMenuGridO color="#fff" size={pxToRem(24)} title="iconga oborsa yozuv chiqadi" />
        <h3>Todo</h3>
      </div>
      <div className="header-input">
        <input type="text" />
      </div>
      <div className="header-action">
          <button><IoSettingsOutline color="#fff" size={pxToRem(24)}/></button>
          <button><BiQuestionMark color="#fff" size={pxToRem(24)}/></button>
          <button className="header-notification">
              <span>{0}</span>
              <AiOutlineNotification color="#fff" size={pxToRem(24)}/></button>
          <button className="heaader-profile"><AiOutlineUser color="#fff" size={pxToRem(24)}/></button>
        
      </div>
    </StyledHeader>
  );
}
