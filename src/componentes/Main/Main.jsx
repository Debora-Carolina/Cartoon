import React from "react";
import * as S from "./StyleMain.jsx"
import scubidu from "../Main/ImagensMain/scubidu.png"
import ben10 from "../Main/ImagensMain/ben10.png"
import pernalonga from "../Main/ImagensMain/pernalonga.png"
import estranho from "../Main/ImagensMain/gumball.png"
import meninas from "../Main/ImagensMain/meninas.png"
import gato from "../Main/ImagensMain/gato.png"

function Main() {
    return (
        <S.MainStyle>
          <S.Div1>
           <img src={scubidu} alt="scubidu"></img>
           <img src={ben10} alt="ben10"></img>
           <img src={pernalonga} alt="pernalonga"></img>
          </S.Div1>
        
          <S.Div2>
           <img src={estranho} alt="estranho"></img>
           <img src={meninas} alt="meninas"></img>
           <img src={gato} alt="gato"></img>
          </S.Div2>

        </S.MainStyle>
    )
  }
  
  export default Main