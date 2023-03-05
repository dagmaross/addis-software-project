import styled from'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    font-weight: 400;
    font-style: normal;
  }
  `
  export const Loadingbarfill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0%;
  background-color: #007bff;
  animation: loading 1.5s linear infinite;
`;

export const Loadingbar = styled.div`
  position: relative;
  height: 2px;
  width: 100%;
  background-color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes loading {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
`;

export const List=styled.div`
width: 443px;
height: 520px;
left: 88px;
top: 336px;
background: #FFFFFF;
border: 1px solid #2174C9;
border-radius: 40px;
margin-top: -2rem;
margin-left: 28rem;
`;

export const Form=styled.form`

display: flex;
flex-direction: column;
gap: 0.5rem;
`;

export const Text4=styled.h4`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 54px;
/* identical to box height */
text-align: center;
margin-top: -0.5rem;
color: #FFFFFF;

`;

export const Label=styled.label`
text-align: center;
  
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size:20px;
line-height: 54px;
color: #000000;
`;

export const Input=styled.input`
width: 250px;
height: 40px;
background: #FFFFFF;
border: 1px solid #000000;
border-radius: 20px;
margin-left: 6rem;
text-align: center;
font-size: 17px;
`;
export const Button=styled.button`
width: 200px;
height: 40px;
background: #FA8937;
border-radius: 100px;
margin-left: 8rem;
margin-top: 0.7rem;
border: none;

`;
export const Total=styled.div`
display: flex;
justify-content: space-around;

`;
export const Alltotal=styled.div`
display: flex;
flex-direction: column;
`;
export const Totalnumber=styled.div`
display: flex;
justify-content: space-around; 
`;
export const Navbars=styled.div`
width: 100%;
height: 75px;
left: 0px;
top: 25px;
background: #E7E7E7;
border-radius: 80px;
justify-content: center;
text-decoration: none;
`;
export const Nav=styled.nav`
display: flex;
gap: 4rem;
justify-content: center;
text-decoration: none;
`;
export const Anchor=styled.a`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 20px;
margin-top: 0.5rem;
line-height: 60px;
text-decoration: none ;
color: #000000;
`;
export const Artists=styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
overflow-y: scroll;

margin-top: 5rem;
`;
export const Artistcard=styled.div`
width: 400px;
height: 200px;
background: rgba(254, 254, 254, 0.38);
border: 1px solid #000000;
border-radius: 70px;
margin-left: 28rem;
`;
export const Artisttexts=styled.div`

margin-left: 3rem;
margin-top: 3rem;
`;
export const Loadingcontainer=styled.div`
justify-content: center;
align-items: center;
height: 100vh;
`;
export const Title=styled.h1`
text-align: center;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 40px;
line-height: 96px;
margin-top: -1rem;
`;
export const Span1=styled.span`
color: #2174C9;
`;
export const Span2=styled.span`
color: #FA8937;
`;
export const Span3=styled.span`
color: #24CDC8;
`;
export const Music=styled.div`
margin-top: 4rem;
background-color: rgb(243, 170, 0);

display: flex;
flex-wrap: wrap;
justify-content: space-around;

`;
export const Cards=styled.div`
margin-left: 4rem;
margin-top: 2rem;
`;
export const P1=styled.img`

margin-top: -10rem;
margin-left: 16rem;
color: red;
width: 20px;
height: 20px;
`;