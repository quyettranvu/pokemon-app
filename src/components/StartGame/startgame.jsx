import React from 'react';
import { useNavigate } from 'react-router-dom';

//Images
import pokeball from '../../Ảnh Pokemon Dự Trù/покебол-min.svg';
import logo from '../../Ảnh Pokemon Dự Trù/логотип.svg';
import footer from '../../Ảnh Pokemon Dự Trù/Vector_128.svg';
import blackline from '../../Ảnh Pokemon Dự Trù/1_1.svg';

const Startgame = () => {

  const navigate=useNavigate();  

  const startGame=()=>{
    navigate("/login");
  }

  return (
    <div className="background-start">
        {/*Put Image Background Here*/}
        <img src={logo} className="logo-tokemon" alt=""/>

        <img src={pokeball} className="pokeball-start" alt=""/>

        <div className="start-game" onClick={startGame}>Start</div>

        <div>
          <img src={blackline} className="blackline-left" alt=""/>
          <img src={footer} className="footer" alt=""/>
          <img src={blackline} className="blackline-right" alt=""/>
        </div>

    </div>
  )
}

export default Startgame;