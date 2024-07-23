import styled from "styled-components";

export const PokeCardContainer = styled.div`
height: 210px;
width: 420px;
margin: 10px;
border-radius:100px ;
border-end-end-radius: 500px;
background-color: ${(props) => props.type};
position: relative;
color: white;
` 
export const PokeSection = styled.section`
display: flex;
flex-direction: column;
height:69%;
margin:27px 0 0 50px;
`

export const ImgContainer = styled.div`
background: #f1f1f1;
display: flex;
justify-content: center;
align-items: center;
`

export const PokeImg = styled.img`
height: 200px;
position: absolute;
top: -26px;
right: -27px;
`

export const LogoImg = styled.img`
width:91px;
height:30px;
margin:3px;
`

export const PokebolTransp = styled.img`
position: absolute;
width:215px;
top:-20px;
right:-10px;
z-index: 0;
`


export const PokebolaImg = styled.img`
position: absolute;
width: 35px;
top: 10px;
left: 12px;
` 

export const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height:15%;
`

export const Buttondetails = styled.button`
width: 130px;
height: 35px;
background: #ffffff;
border-radius: 100px;
cursor: pointer;
margin-left: 18px;

`


export const ButtonAdicionar = styled.button`
width: 130px;
height: 35px;
background: #ffffff;
border-radius: 100px;
cursor: pointer;
margin-right:135px;
background-size: 100% 100%;
z-index: 1;
`;






