import React from 'react'
import styled from 'styled-components'
const DateStyle = styled.div`
 display: flex;
  color: #e8eddf;
  font-size: 0.5rem;
  font-weight: bold;
  justify-content: center;
  display: inline-block;
  width: 20%;
`


export default function Date({date}){
    return <DateStyle>
        <h2>{date}</h2>
         </DateStyle>
}
 