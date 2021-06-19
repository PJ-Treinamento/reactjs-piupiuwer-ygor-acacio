import styled from "styled-components";
//import Magnifying from "../../Assets/Images/Magnifying.svg";

export const Icons = styled.img`
  width: 1.2rem;
  height: 1.2em;
  margin: 0.2rem;
  margin-right: 0.2rem;
  margin-left: 0.2rem;

  @media (min-width: 1100px){
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
    margin-left: 0.8rem;
  }
`
export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  width: 53rem;

  @media (min-width: 1100px){
   width: 110rem;
   padding-top: 1rem;
   padding-block-end: 1rem;
  }
`
export const NavBarCenter = styled.div`
  background-color: rgba(82, 183, 136, 1);
  display: flex;
  justify-content: center;
`
export const SearchInput = styled.input`
  width: 11rem;
  border-radius: 0.8rem;
  border-style: solid;
  border-color: rgb(227, 227, 227);

  ::placeholder{
    font-size: 1.2rem;
    padding-left: 1rem;
    color: rgba(128, 126, 126, 1);
    font-family: Roboto;
  }

  :focus{
    outline-width: 0;
    border-color: rgba(0, 0, 0, 0.3);
  }

  :hover{
    border-color: rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 1100px){
    width: 20rem;
    height: 2.5rem;

    ::placeholder{
      font-size: 1.4rem;
    }
  }
`

export const LogoPiuPiuwer = styled.img`
  width: 3rem;
  height: 3rem;

  @media (min-width: 1100px){
   height: 4rem;
   width: 4rem;
  }
`

export const MenuBar = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 28rem;

  @media (min-width: 1100px){
   width : 35rem;
  }
`

export const IconMenu = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 1.2rem;
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.8);

  :hover{
    color: rgba(0, 0, 0, 1);
  }

  @media (min-width: 1100px){
   font-size : 1.4rem;
  }
`

export const Header = styled.header`
  width: 54rem;
  display: flex;
  justify-content: space-between;
  padding: 3rem 5rem;

  @media (min-width: 1100px){
   width :110rem;
   padding-right: 25rem;
  }
`

export const HeaderCenter = styled.div`
  background-color: rgba(149, 213, 178, 0.5);
  display:flex;
  justify-content: center;
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileInfo = styled.div`
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (min-width: 1100px){
   height :12rem ;
  }
`

export const ImgProfile = styled.img`
  border-radius: 100%;
  width: 10rem;
  height: 10rem;
  margin-block-end: 1.5rem;

  @media (min-width: 1100px){
   width : 15rem;
   height: 15rem;
   margin-block-end: 2rem;
  }
`

export const Tittle = styled.h2`
  font-family: Roboto;
  font-weight: 500;
  max-width: 25rem;

  @media (min-width: 1100px){
   max-width : 50rem;
   font-size: 2rem;
  }
`

export const Tittle2 = styled.h3`
  max-width: 25rem;
  font-family: Roboto;
  font-weight: 500;

  @media (min-width: 1100px){
   max-width: 50rem;
   font-size: 1.4rem;
  }
`

export const PiuPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const AreaPiu = styled.textarea`
  min-width: 20rem;
  max-width: 20rem;
  min-height: 10rem;
  max-height: 10rem;
  border-radius: 0.8rem;
  border-style: solid;
  border-color: rgb(227, 227, 227);
  margin-top: -4rem;

  ::placeholder{
    font-size: 1.2rem;
    padding-top: 0.5rem;
    padding-left: 1rem;
    color: rgba(128, 126, 126, 1);
    font-family: Roboto;
  }

  :focus{
    outline-width: 0;
    border-color: rgba(0, 0, 0, 0.3);
  }

  :hover{
    border-color: rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 1100px){
    min-width: 45rem;
    max-width: 45rem;
    min-height: 15rem;
    max-height: 15rem;

    ::placeholder{
      font-size: 1.4rem;
    }
  }
`

export const WritePiu = styled.div`
  display: flex;
`
export const Button = styled.button`
  background: transparent;
  border-style: none;
  cursor: pointer;
  margin-left: 1rem;
  margin-block-end: -4.5rem;
  color: rgba(0, 0, 0, 0.8);
  font-size: 1.8rem;
  font-family: Roboto;
  font-weight: 400;

  :hover{
    color: rgba(0, 0, 0, 1);
  }

  @media (min-width: 1100px){
   margin-block-end: -9rem; 
  }
`
export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const PiuBox = styled.div`
  border-radius: 0.8rem;
  background: #F9F6F6;
  border: 0.1rem solid #8A8989;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 49rem;
  margin-top: 2.4rem;
  padding: 1rem;

  @media (min-width: 1100px){
   width: 60rem;
   padding: 2rem;
  }
`

export const PiuBoxProfile = styled.div`
  display: flex;
  font-family: Roboto;
  align-items: center;
  justify-content: space-between;
  width: 39rem;

  img{
    border-radius: 100%;
    width: 2.9rem;
    cursor: pointer;
  }

  h2{
    color: rgba(0, 0, 0, 0.9);
    max-width: 15rem;
  }

  h3, p{
    font-weight: 300;
    color: rgba(0, 0, 0, 0.8);
  }

  @media (min-width: 1100px){
    width: 45rem;

    img{
      width: 3.2rem;
    }

    h2{
      max-width: 25rem;
      font-size: 1.7rem;
    }

    h3, p{
      font-size: 1.3rem;
    }
  }
`

export const PiuConteiner = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1.2rem;
  margin-block-end: 1.2rem;
  
`
export const Piu = styled.p`
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.8);
  font-size: 1.4rem;
  font-weight: 400;
  width: 39rem;

  @media (min-width: 1100px){
   font-size: 1.5rem;
   width: 48rem;
  }
`
export const PiuInterections = styled.div`
  margin-left: 3.7rem;
  display: flex;
  align-items: center;
  
  img{
    margin-right: 0.7rem;
    cursor: pointer;
  }

  p{
    margin-right: 2rem;
  }
  
  @media (min-width: 1100px){
    margin-left: 3rem;

    p{
      font-size: 1.2rem;
    }
  }
`