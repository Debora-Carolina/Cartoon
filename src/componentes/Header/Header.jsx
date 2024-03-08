import React from "react";
//import styled from "styled-components" //se for estilizar aqui no mesmo compoente usamos a const aqui. 
import * as S from "./StyleHeader" //vai puxar tudo que tem o S.
import Cartoon from "../Header/ImagensHeader/cartoon.png"
import Controle from "../Header/ImagensHeader/controle.png"
import Relogio from "../Header/ImagensHeader/relogio.png"


function Header () {
    return (
        <S.HeaderStyle>
     
         <img src={Cartoon} alt="Cartoon"/>

            <S.Section>
                <S.Div>
                 <img src={Controle} alt="Controle"/>
                 <h2>JOGOS</h2>
                </S.Div>    

                <S.Div>
                 <img src={Relogio} alt="Controle"></img>
                 <h2>PROGRAMAÇÃO</h2>
                </S.Div>    
       
            </S.Section>

       </S.HeaderStyle>

    )
}

export default Header
