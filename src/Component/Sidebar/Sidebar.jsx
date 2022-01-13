import React from "react";
import {VscMenu} from "react-icons/vsc" 
import {pxToRem} from '../../utils/index';
import {BsSun,BsStar} from 'react-icons/bs'
import {IoHomeOutline   } from 'react-icons/io5';
import {AiOutlineUser   } from 'react-icons/ai';
import {VscCalendar   } from 'react-icons/vsc';
import {Link} from 'react-router-dom'
import { StyledSidebar } from "./Sidebar.style.js";
const MENU_LIST= [
    {
        title: "My DAY",
        path: '/my-day',
        icon: <BsSun/>
    },{
        title: "Important",
        path: '/Important',
        icon: <BsStar/>
    },{
        title: "Planned",
        path: '/Planned',
        icon: <VscCalendar/>
    },
    {
        title: "Assigned to me",
        path: '/Assigned-to-me',
        icon: <AiOutlineUser/>
    },
    {
        title: "Tasks",
        path: '/Tasks',
        icon: <IoHomeOutline/>
    },
]

export default function Sidebar() {
  return <StyledSidebar>
      <div>
          <button> <VscMenu size={pxToRem(24)} color="#fff"/></button>
      </div>
      <div className="menu-list">
          {MENU_LIST.map(item=>{
              return(
                  <Link to={item.path} className="menu-list-item" key={item.title}>
                      {item.icon}
                    <span>{item.title}</span>
                  </Link>
              )
          })}
      </div>
  </StyledSidebar>;
}
