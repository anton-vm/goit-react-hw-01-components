import styled from 'styled-components'

export const StatSection = styled.section `

display: flex;
margin: 20px auto;
width: 450px;
flex-direction: column;
align-items: center;
border: 2px solid grey;
border-radius: 8px;
`;

export const StatTitle = styled.h2 `
font-size: 34px;
font-weight: 700;
margin: 30px 0;
`;

export const StatList = styled.ul `
list-style: none;
margin: 0;
padding: 0;
display: flex;
width: 100%;
`;

export const StatItem = styled.li `
display: flex;
width: 100%;
border: 1px solid gray;
align-items: center;
flex-direction: column;
background-color: rgb(${colorChange()}, ${colorChange()}, ${colorChange()});
border: none
`

function colorChange () {
     return Math.random() * (256 - 0) + 0;
}

export const StatLabel = styled.span `
margin: 20px 0 1px;
color: black;
`
export const StatPercentage = styled.span `
font-weight: 700;
font-size: 20px;
margin: 0px 0 20px;
`