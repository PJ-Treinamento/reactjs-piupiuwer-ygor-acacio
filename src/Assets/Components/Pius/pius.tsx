import React from "react";
import EmptyStar from "../../Images/empty-star.svg"
import EmptyHeart from "../../Images/empty-heart.svg";
import Baloon from "../../Images/baloon.svg";
import DeleteIcon from "../../Images/trash.svg";
import IconProfile from "../../Images/profile.svg";
import * as S from "./styles"

function Piu (){
  return(
    <S.PiuBox>
      <S.PiuBoxProfile>
        <img src={IconProfile} alt="Profile" />
        <h2>Name</h2>
        <p>-</p>
        <h3>@Username</h3>
        <p>-</p>
        <h3>Data</h3>
        <p>-</p>
        <h3>Horario</h3>
        <S.Icons src={EmptyStar} alt="Star" />
      </S.PiuBoxProfile>
      <S.PiuConteiner>
        <S.Piu>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim quam aenean tincidunt vitae amet. Non luctus sit tortor, urna. Amet viverra senectus tortor proin massa libero gravida. Fames eros, neque proin fringilla.</S.Piu>
      </S.PiuConteiner>
      <S.PiuInterections>
        <S.Icons src={EmptyHeart} alt="Star" />
        <p>500</p>
        <S.Icons src={Baloon} alt="Star" />
        <p>500</p>
        <S.Icons src={DeleteIcon} alt="Star" />
      </S.PiuInterections>
    </S.PiuBox>
  )

}
export default Piu;