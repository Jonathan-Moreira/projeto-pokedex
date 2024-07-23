import styled from "styled-components";


export const MainTudoDoContainer = styled.main`
background-color: gray;
min-height: 80vh;
display: flex;
justify-content: center;

`

export const PokeInfosContainer = styled.div`
height: 75vh;
margin: 20px 20vw;
display: flex;
justify-content: space-between;
background-color: ${props => props.colorType};
border-radius: 100px;
position: relative;
`

export const ImagesContainer = styled.div`
align-items: center;
height: 85%;
display: flex;
flex-direction: column;
justify-content: space-between;

`

export const ImgWrapper = styled.img`
height: 25vh;
background: #f1f1f1;
border-radius: 50px;
margin: 50px;
position: relative;
top: 50px;
border: 1px dashed rgba(0,0,0,0.14) 
`
export const StatsContainer = styled.div`
align-self:center;
height:65%;
width:460px;
z-index: 1;
`
export const TitleContainer = styled.h2`
align-self: center;
color: white
`

export const TypeAndMovesContainer = styled.div`
align-self: center;
height: 75%;
width: 240px;
display: flex;
flex-direction: column;
justify-content: space-between;
z-index: 1;



`
export const TypesContainer = styled.div`
height: 10%;
display: flex;
flex-direction: column;
justify-content: space-around;
color: white;


`

export const MovesContainer = styled.div`
height: 80%;
flex-direction: column;
p{
    background-color: #ececec;
    line-height: 25px;
    max-width:39%;
    border-radius: 10px;
    margin: 10px;
    border: 1px dashed rgba(0,0,0,0.14);
    
}
`


// ""logo dos poderes""
export const LogoImg = styled.img`   
width:77px;
height:30px;
margin:3px;
`
// pokenos desenhos do detalhes
export const PokeImg = styled.img`
height: 250px;
position: absolute;
top: -130px;
right: -10px;
`
// bola de fundo trasnparente
export const PokebolTransp = styled.img`
position: absolute;
top:-90px;
right:-100px;
height: 800px;
z-index: 0;
`

//barra de progresso 
export const ProgressoContainer = styled.div`
width:70%;
section{
    display: grid;
    grid-template-columns: 2fr 1fr 3fr;
}
`

export const DivProgresso = styled.div`
 width: 170%;
 height: 10px;
 `

export const BarraProgresso = styled.div`
 height: 10px;
 background-color: #ff7c2e;
 width: ${props => props.widthBar}%;
 border-radius: 10px;
 `

export const PStatusNome = styled.p`
 display: flex;
 justify-content: end;
 color: white;
 `

export const PStatusNumeros = styled.p`
 display: flex;
 justify-content: center;
 color: white;
 `