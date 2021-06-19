import React from "react";
import  LogoPiuPiuwer  from "../../Assets/Images/logo-PP.svg";
import IconNotification from "../../Assets/Images/sino.svg";
import IconProfile from "../../Assets/Images/profile.svg";
import IconConfig from "../../Assets/Images/gear.svg";
import IconExit from "../../Assets/Images/sair.svg";
import EmptyStar from "../../Assets/Images/empty-star.svg";
import EmptyHeart from "../../Assets/Images/empty-heart.svg";
import Baloon from "../../Assets/Images/baloon.svg";
import DeleteIcon from "../../Assets/Images/trash.svg";
//import Magnifying from "../../Assets/Images/Magnifying.svg";
import * as S from "./styles" 

function Feed (){
  return (
    <div>
      <S.NavBarCenter>
        <S.NavBar>
          <S.SearchInput type="text" placeholder='Pesquisar' />
          <S.LogoPiuPiuwer src={LogoPiuPiuwer} alt="logo do piupiuwer" />
          <S.MenuBar>
            <S.IconMenu><S.Icons src={IconNotification} alt="Notification Icon" />Notifacações</S.IconMenu>
            <S.IconMenu><S.Icons src={IconProfile} alt="Profile Icon" />Perfil</S.IconMenu>
            <S.IconMenu><S.Icons src={IconConfig} alt="gear Icon" />Configurações</S.IconMenu>
            <S.IconMenu><S.Icons src={IconExit} alt="Exit Icon" />Sair</S.IconMenu>
          </S.MenuBar>
        </S.NavBar>
      </S.NavBarCenter>
      <S.HeaderCenter>
        <S.Header>
          <S.Profile>
            <S.ImgProfile src={IconProfile} alt="User profile" />
            <S.ProfileInfo>
              <S.Tittle>Name:</S.Tittle>
              <S.Tittle2>Bio:</S.Tittle2>
              <S.Tittle2>Following:</S.Tittle2>
              <S.Tittle2>Followers:</S.Tittle2>
            </S.ProfileInfo>
          </S.Profile>
          <S.PiuPost>
            <S.Tittle>Que tal escrever um piu agora ?</S.Tittle>
            <form>
              <S.WritePiu>
                  <label htmlFor="piu"></label>
                  <S.AreaPiu name="piu" placeholder="Escreva aqui: "></S.AreaPiu>
                  <S.Button type="submit" >Piar ?</S.Button>
              </S.WritePiu>
            </form>
          </S.PiuPost>
        </S.Header>
      </S.HeaderCenter>
      <S.Section>
        <S.PiuBox>
          <S.PiuBoxProfile>
            <img src={IconProfile} alt="Profile" />
            <h2>ygor acacio maria</h2>
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
      </S.Section>
    </div>
  )

}
export default Feed; 