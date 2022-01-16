import React from 'react'
import{Routes,Route} from 'react-router-dom'
import { StyledMain } from './Main.style'
import ToDos from '../ToDos/ToDos'

export default function Main() {
    return (
        <StyledMain>
            <Routes>
                <Route path="/:name" element={<ToDos/>}/>
            </Routes>
        </StyledMain>
    )
}
