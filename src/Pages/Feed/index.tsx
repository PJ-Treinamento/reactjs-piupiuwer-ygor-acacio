import React, { useState, useEffect, useContext, FormEvent } from "react";
import Api from "../../Services/api";
import { IPiu } from "../../Assets/Components/Interfaces/interfaces";
import  LogoPiuPiuwer  from "../../Assets/Images/logo-PP.svg";
import IconNotification from "../../Assets/Images/sino.svg";
import IconProfile from "../../Assets/Images/profile.svg";
import IconConfig from "../../Assets/Images/gear.svg";
import IconExit from "../../Assets/Images/sair.svg";
import Piu from "../../Assets/Components/Pius";
import { Context } from "../../Assets/Hooks/authContext";
import IconMagnifying from "../../Assets/Images/Magnifying.svg";

import * as S from "./styles" 

const Feed = () => {
  const {Logout} = useContext(Context)
  const {authenticated} = useContext(Context)
  const {user, token} = authenticated

  const [search, setSearch] = useState('')
  const [postPius, setPostPius] = useState('')
  const [pius, setPius] = useState<IPiu[]>([])
  //filtragen da barra de busca
  const piusFilter = pius.filter((piu) => 
    piu.user.first_name.toLocaleLowerCase().includes(search))

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
  //validando o tamanho do piu que será feito
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
            <S.SearchInput 
              type="text" 
              placeholder='Pesquisar'
              value={search}
              onChange={(ev) => setSearch(ev.target.value) }  
            />
            <S.Icons 
              src={IconMagnifying} 
              alt="Magnifying Icon" 
            />
          </S.Search>
          <S.LogoPiuPiuwer src={LogoPiuPiuwer} alt="logo do piupiuwer" />
          <S.MenuBar>
            <S.IconMenu><S.Icons src={IconNotification} alt="Notification Icon" />Notifacações</S.IconMenu>
            <S.IconMenu><S.Icons src={IconProfile} alt="Profile Icon" />Perfil</S.IconMenu>
            <S.IconMenu><S.Icons src={IconConfig} alt="gear Icon" />Configurações</S.IconMenu>
            <S.IconMenu onClick={Logout}><S.Icons src={IconExit} alt="Exit Icon"  />Sair</S.IconMenu>
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
        {piusFilter.map(piu => <Piu {...piu} key={piu.id}/>)}
      </S.Section>
    </div>
  )

}
export default Feed; 