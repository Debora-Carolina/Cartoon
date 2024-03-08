import React from "react";
import * as S from "./StyleFooter" //vai puxar tudo que tem o S.
import wb from "../Footer/ImagensFooter/wb.png"
import git from "../Footer/ImagensFooter/git.png"
import linkedin from "../Footer/ImagensFooter/linkedin.png"


function Footer() {
    return (
        <S.FooterStyle>

            <S.Section>
                <img src={wb} alt="wb"></img>
              
                <S.Ul>
                <li>Sobre nós</li>
                <li>Produtos</li>
                <li>Personagens</li>
                </S.Ul>

                <S.Div1>
                <img src={git} alt="git"></img>
                <img src={linkedin} alt="linkedin"></img>
                </S.Div1>

            </S.Section>
            
                <S.Div2>
                <h1>© 2024 Cartoon Network</h1>
                </S.Div2>

      </S.FooterStyle>
    )
  }
  
  export default Footer