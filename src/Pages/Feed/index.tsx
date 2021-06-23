import React, { useState, useEffect, useContext } from "react";
import  LogoPiuPiuwer  from "../../Assets/Images/logo-PP.svg";
import IconNotification from "../../Assets/Images/sino.svg";
import IconProfile from "../../Assets/Images/profile.svg";
import IconConfig from "../../Assets/Images/gear.svg";
import IconExit from "../../Assets/Images/sair.svg";
import Piu from "../../Assets/Components/Pius";
import { Context } from "../../Assets/Hooks/authContext";
import Api from "../../Services/api";
import IconMagnifying from "../../Assets/Images/Magnifying.svg";
import * as S from "./styles" 
import { FormEvent } from "react";
import { IPiu } from "../../Assets/Components/Interfaces/interfaces";


const Feed = () => {
  const {Logout} = useContext(Context)
  const {authenticated} = useContext(Context)
  const {user, token} = authenticated

  const [postPius, setPostPius] = useState('')
  const [pius, setPius] = useState<IPiu[]>([])
  

  useEffect(() =>{
    const Data = async() =>{
      try {
        const response = await Api.get('/pius', {
        headers: {authorization:`Bearer ${token}`}
      })
      setPius(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    Data()
  }, [token]) 
  
  const PostPiu = (e:FormEvent) => {
    if (postPius.length===0 || postPius.length>=140){
      e.preventDefault()
    }else{
    e.preventDefault()
    Api.post('/pius', { text:postPius }, {
      headers: {authorization:`Bearer ${token}`}
    } )
  }}

  return (
    <div>
      <S.NavBarCenter>
        <S.NavBar>
          <S.Search>
            <S.SearchInput type="text" placeholder='Pesquisar' />
            <S.Icons src={IconMagnifying} alt="Magnifying Icon" />
          </S.Search>
          <S.LogoPiuPiuwer src={LogoPiuPiuwer} alt="logo do piupiuwer" />
          <S.MenuBar>
            <S.IconMenu><S.Icons src={IconNotification} alt="Notification Icon" />Notifacações</S.IconMenu>
            <S.IconMenu><S.Icons src={IconProfile} alt="Profile Icon" />Perfil</S.IconMenu>
            <S.IconMenu><S.Icons src={IconConfig} alt="gear Icon" />Configurações</S.IconMenu>
            <S.IconMenu><S.Icons src={IconExit} alt="Exit Icon" onClick={Logout} />Sair</S.IconMenu>
          </S.MenuBar>
        </S.NavBar>
      </S.NavBarCenter>
      <S.HeaderCenter>
        <S.Header>
          <S.Profile>
            <S.ImgProfile src={user.photo} alt="User profile" />
            <S.ProfileInfo>
              <S.Tittle>{user.first_name} {user.last_name}</S.Tittle>
              <S.Tittle2>@{user.username}</S.Tittle2>
              <S.Tittle2>{user.about}</S.Tittle2>
              <S.Tittle2>Following {user.following.length}</S.Tittle2>
              <S.Tittle2>Followers {user.followers.length}</S.Tittle2>
            </S.ProfileInfo>
          </S.Profile>
          <S.PiuPost>
            <S.Tittle>Que tal escrever um piu agora ?</S.Tittle>
            <form>
              <S.WritePiu>
                  <label htmlFor="piu"></label>
                  <S.AreaPiu 
                    name="piu" 
                    placeholder="Escreva aqui:"
                    value={postPius}
                    onChange={(e) => {setPostPius(e.target.value)}}
                  ></S.AreaPiu>
                  <S.Button type="submit" onClick={PostPiu} >Piar ?</S.Button>
              </S.WritePiu>
            </form>
          </S.PiuPost>
        </S.Header>
      </S.HeaderCenter>
      <S.Section>
        {pius.map(piu => <Piu {...piu} key={piu.id}/>)}
      </S.Section>
    </div>
  )

}
export default Feed; 