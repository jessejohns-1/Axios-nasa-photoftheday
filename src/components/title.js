import React from "react"
import styled from 'styled-components'

const StyledTitle = styled.div`
display: flex;

justify-content: center;
color: White;
font-size: .8rem;

`
export default function Title({title}){
    
    return (<StyledTitle> 
        <h1>{title}</h1> 
        </StyledTitle>)
}