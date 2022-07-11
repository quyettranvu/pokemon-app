//React, React Router, React Hooks
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";

//Images
import logo from "../../../Ảnh Pokemon Dự Trù/логотип.svg";
import human from "../../../Ảnh Pokemon Dự Trù/Чел.svg";
import satoshi from "../../../Ảnh Pokemon Dự Trù/123133.svg";
import britain from "../../../Ảnh Pokemon Dự Trù/gb-1.svg";
import support from "../../../Ảnh Pokemon Dự Trù/супорт.svg";
import pokeball from "../../../Ảnh Pokemon Dự Trù/пакебол(1)-min.svg";

const Game = () => {
  const [openNewDropDown, setNewOpenDropDown] = useState(false);
  const [onActive, setActive] = useState("false");
  const navigate = useNavigate();

  //Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  //Show Menu
  const backHome = () => {
    navigate("/home");
  };

  //Show informations of user
  const showNewMenu = () => {
    setNewOpenDropDown(!openNewDropDown);
    setActive(!onActive);
  };

  return (
    <div className="homepage">
      <div className="main_container">
        <nav className={onActive ? "navbar" : "navbar_active"}>
          <FontAwesomeIcon
            icon={faBars}
            className={onActive ? "icon-menu" : "icon_menu_active"}
            onClick={backHome}
          />

          <img
            className={onActive ? "pokemon-banner" : "pokemon-banner_active"}
            src={logo}
            alt=""
          />

          <img
            src={human}
            className={onActive ? "icon-user" : "icon-user_active"}
            onClick={showNewMenu}
            alt=""
          />
          {openNewDropDown ? (
            <ul className="user-info">
              <span className="user-id">User Id-</span>

              <li>Balance: </li>
              <li>Cards profit: </li>
              <li>Referal profit: </li>
              <li>Link for invitation</li>
              <div className="link-invitation"></div>

              <button className="yellow-btn">Deposit</button>
              <button className="yellow-btn">Withdraw</button>

              <img className="satoshi" src={satoshi} alt="" />
            </ul>
          ) : null}

          <button
            className={onActive ? "white_btn_in" : "white_btn_in_active"}
            onClick={handleLogout}
          >
            Logout
          </button>
        </nav>
      </div>
      <div className={onActive ? "site-main-game" : "site-main_active"}>
        <div className="text-game">УЧАСТВУЙ В БИТВАХ И ПОЛУЧАЙ ПРИЗЫ</div>

        <div className="container">
          <div className="row">
            <div className="col-sm" id="title-pack-pokeballs">
              Cards
              <ul className="row" id="pack-pokeballs">
                <div id="pokeballs-detail">
                  <img src={pokeball} className="small-pokeball" alt="" />
                  <img src={pokeball} className="small-pokeball" alt="" />
                  <img src={pokeball} className="small-pokeball" alt="" />
                  <img src={pokeball} className="small-pokeball" alt="" />
                  <img src={pokeball} className="small-pokeball" alt="" />
                  <img src={pokeball} className="small-pokeball" alt="" />
                  <div className="text-pokeball-1">BRONZE</div>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="icon-showdown"
                  />
                </div>
              </ul>
            </div>
            <div className="col-sm" id="title-pack-pokeballs">
              Cards
              <ul className="row">
                <div id="pokeballs-detail">
                  <img src={pokeball} className="small-pokeball" alt="" />
                  <img src={pokeball} className="small-pokeball" alt="" />
                  <img src={pokeball} className="small-pokeball" alt="" />
                  <img src={pokeball} className="small-pokeball" alt="" />
                  <img src={pokeball} className="small-pokeball" alt="" />
                  <img src={pokeball} className="small-pokeball" alt="" />
                  <div className="text-pokeball-2">SILVER</div>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="icon-showdown"
                  />
                </div>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-sm" id="title-pack-pokeballs">
              Cards
              <ul className="row">
                <div id="pokeballs-detail">
                  <img src={pokeball} className="small-pokeball" alt="" />
                  <img src={pokeball} className="small-pokeball" alt="" />
                  <img src={pokeball} className="small-pokeball" alt="" />
                  <img src={pokeball} className="small-pokeball" alt="" />
                  <img src={pokeball} className="small-pokeball" alt="" />
                  <img src={pokeball} className="small-pokeball" alt="" />
                  <div className="text-pokeball-3">GOLD</div>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="icon-showdown"
                  />
                </div>
              </ul>
            </div>
            <div className="col-sm" id="title-pack-pokeballs">
              Cards
              <ul className="row">
                <div id="pokeballs-detail">
                  <div id="pokeballs-detail-inside">
                    <img src={pokeball} className="small-pokeball" alt="" />
                    <img src={pokeball} className="small-pokeball" alt="" />
                    <img src={pokeball} className="small-pokeball" alt="" />
                    <img src={pokeball} className="small-pokeball" alt="" />
                    <img src={pokeball} className="small-pokeball" alt="" />
                    <img src={pokeball} className="small-pokeball" alt="" />
                  </div>
                  <div className="text-pokeball-4">EMERALD</div>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="icon-showdown"
                  />
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className="game-history">
            GAME HISTORY
        </div>

        <img
          src={britain}
          className={
            onActive
              ? "english-icon-mainpage-game"
              : "english-icon-mainpage-game_active"
          }
          alt=""
        />

        <img
          src={support}
          className={
            onActive
              ? "support-icon-mainpage-game"
              : "support-icon-mainpage-game_active"
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default Game;
