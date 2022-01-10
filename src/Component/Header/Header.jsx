import React from 'react'
import { StyledHeader} from './Header.style'
import {BsGrid3X3Gap} from 'react-icons/bs'

export default function Header() {
    return (
        <StyledHeader>
            <div><BsGrid3X3Gap color='#fff' size={24} title='iconga oborsa yozuv chiqadi' /></div>
            <h3>Todo</h3>
            <div className="header-input">
                <input type="text" />
            </div>
            <div className="header-action">
                <h5>Icon</h5>
                <h5>Icon</h5>
                <h5>Icon</h5>
                <h5>Icon</h5>
                <h5>Icon</h5>
            </div>
        </StyledHeader>
    )
}
