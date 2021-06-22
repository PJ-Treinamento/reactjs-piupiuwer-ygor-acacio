import React, { useState } from "react";
import EmptyStar from "../../Images/empty-star.svg"
import EmptyHeart from "../../Images/empty-heart.svg";
import Baloon from "../../Images/baloon.svg";
import DeleteIcon from "../../Images/trash.svg";
import * as S from "./styles"
import { IPiu } from "../Interfaces/interfaces";
import { useContext } from "react";
import { Context } from "../../Hooks/authContext";
import Api from "../../../Services/api";

function Piu ({user, text, likes, id, updated_at}:IPiu){
  const [like, setLike] = useState(false)
  const {authenticated} = useContext(Context)
  const {token} = authenticated

  const deletePiu = async() => {
    try {
      const deleteResponse = await Api.delete('/pius',
    { headers: {authorization:`Bearer ${token}`}}  )
    console.log(deleteResponse)
    } catch (error) {
      console.log(error)
    }
    
  }

  if(like){
    const Heart = EmptyHeart;
  }

  return(
    <S.PiuBox>
      <S.PiuBoxProfile>
        <S.ImgProfile src={user.photo} alt="Profile" />
        <h2>{user.first_name} {user.last_name}</h2>
        <p>-</p>
        <h3>@{user.username}</h3>
        {/* <p>-</p>
        <h3>{created_at}</h3> */}
        <p>-</p>
        <h3>{updated_at}</h3>
        <S.Icons src={EmptyStar} alt="Star" />
      </S.PiuBoxProfile>
      <S.PiuConteiner>
        <S.Piu>{text}</S.Piu>
      </S.PiuConteiner>
      <S.PiuInterections>
        <S.Icons
          src={EmptyHeart}
          onClick={() => {
            setLike(true)
            console.log(like)
          } } alt="Star" />     
        <p>{likes.length}</p>
        <S.Icons src={Baloon} alt="Star" />
        <p>0</p>
        <S.Icons src={DeleteIcon} onClick={deletePiu} alt="Star" />
      </S.PiuInterections>
    </S.PiuBox>
  )

}
export default Piu;