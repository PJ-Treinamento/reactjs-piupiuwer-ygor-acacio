import React, { useState } from "react";
import EmptyStar from "../../Images/empty-star.svg"
import GoldenStar from "../../Images/golden-star.svg"
import EmptyHeart from "../../Images/empty-heart.svg";
import FullHeart from "../../Images/full-heart.svg"
import Baloon from "../../Images/baloon.svg";
import DeleteIcon from "../../Images/trash.svg";
import * as S from "./styles"
import { IPiu } from "../Interfaces/interfaces";
import { useContext } from "react";
import { Context } from "../../Hooks/authContext";
import Api from "../../../Services/api";

const Piu = ({user, text, likes, id, updated_at}:IPiu) => {
  const [like, setLike] = useState(EmptyHeart)
  const [favorite, setFavorite] = useState(EmptyStar)

  const {authenticated} = useContext(Context)
  const {token} = authenticated

  const deletePiu = async() => {
    try {
      const deleteResponse = await Api.delete('/pius',
    { data:{piu_id:id}, headers: {authorization:`Bearer ${token}`}}  )
    console.log(deleteResponse)
    } catch (error) {
      console.log(error)
    }  
  }

  const likePiu = async() => {
    try {
      const likeResponse = await Api.post('/pius/like', {data:{piu_id:id}},
    { headers: {authorization:`Bearer ${token}`}}  )
    console.log(likeResponse)
    } catch (error) {
      console.log(error)
    }  
  }

  const favoritePiu = async() => {
    try {
      const favoriteResponse = await Api.post('/pius/favorite', {data:{piu_id:id}},
    { headers: {authorization:`Bearer ${token}`}})
      console.log(favoriteResponse)
    } catch (error) {
      console.log(error)
    }
  } 

  return(
    <S.PiuBox>
      <S.PiuBoxProfile>
        <S.ImgProfile src={user.photo} alt="Profile" />
        <h2>{user.first_name} {user.last_name}</h2>
        <p>-</p>
        <h3>@{user.username}</h3>
        <p>-</p>
        <h3>{updated_at}</h3>
        <S.Icons src={favorite} 
          onClick={()=>{
            setFavorite(GoldenStar)
            favoritePiu()
          }} 
          alt="Star" />
      </S.PiuBoxProfile>

      <S.PiuConteiner>
        <S.Piu>{text}</S.Piu>
      </S.PiuConteiner>

      <S.PiuInterections>
        <S.Icons src={like} 
          onClick={() => {
            setLike(FullHeart)
            likePiu()
          }} 
          alt="Star" />     
        <p>{likes.length}</p>

        <S.Icons src={Baloon} alt="Star" />
        <p>0</p>

        <S.Icons src={DeleteIcon} 
          onClick={() => {
            deletePiu()
          }} 
          alt="Star" />
      </S.PiuInterections>
    </S.PiuBox>
  )

}
export default Piu;