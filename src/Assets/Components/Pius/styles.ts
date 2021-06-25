import styled from "styled-components";

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
  width: 43rem;

  img{
    cursor: pointer;
  } 

  h2{
    color: rgba(0, 0, 0, 0.9);
    max-width: 20rem;
  }

  h3, p{
    font-weight: 300;
    color: rgba(0, 0, 0, 0.8);
  }

  @media (min-width: 1100px){
    width: 54rem;

    h2{
      max-width: 35rem;
      font-size: 1.7rem;
    }

    h3, p{
      font-size: 1.3rem;
    }
  }
`
export const ImgProfile = styled.img`
  border-radius: 100%;
  width: 2.9rem;
  height: 2.9rem;
  cursor: pointer;

  @media (min-width: 1100px){
    width: 3rem;
    height: 3rem;

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