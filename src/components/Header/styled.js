import styled from "styled-components";

export const HeaderContainer = styled.header`
height: 20vh;
min-height:160px;
background: #f1f1f1;
display: flex;
align-items: center;
justify-content: center;
color: black;
position: relative;
`;

export const EsquerdaHeaderButton = styled.button`
position: absolute;
left: 10px;
height:32px;
width: 180px;
border-radius:100px;
border-end-end-radius: 500px;
background-color: #33a4f5;
border: none;
color: white;
cursor: pointer;
font-size: 18px;
`

export const DireitaHeaderButton = styled.button`
position: absolute;
right:10px;
width: 250px;
height:70px;
background-color: ${props => props.red? "#FF6262;" : "#33a4f5"};
border-radius:100px;
border-end-end-radius: 500px;
border: none;
cursor: pointer;
color: white;
font-size: 22px;
`
export const LogoImg = styled.img`
width: 307px;


`