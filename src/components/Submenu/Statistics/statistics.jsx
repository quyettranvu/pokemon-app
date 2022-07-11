//React, React Router, React Hooks
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

//Images
import logo from "../../../Ảnh Pokemon Dự Trù/логотип.svg";
import human from "../../../Ảnh Pokemon Dự Trù/Чел.svg";
import satoshi from "../../../Ảnh Pokemon Dự Trù/123133.svg";
import britain from "../../../Ảnh Pokemon Dự Trù/gb-1.svg";
import support from "../../../Ảnh Pokemon Dự Trù/супорт.svg";

const Statistics = () => {
  const [openDropDown, setOpenDropDown] = useState(true);
  const [openNewDropDown, setNewOpenDropDown] = useState(false);
  const [count, setCount] = useState(1);

  const [onActive, setActive] = useState(false);
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
    setOpenDropDown(false);
    //Check times on click and setState prospectively
    setCount(count + 1);

    console.log(count);

    if (count % 2 === 0) {
      setActive(!onActive);
    } else {
      setActive(onActive);
    }
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

          {openDropDown ? (
            <ul className="statistic-info">
              <li>Количество участников:</li>
              <li>Количество транзакций:</li>><li>Сумма выплат:</li>
            </ul>
          ) : null}

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
      {/* <img  src={pokeball} alt="" className="pokeball"/> */}
      <div className={onActive ? "site-main" : "site-main_active"}>
        <img
          src={britain}
          className={
            onActive ? "english-icon-mainpage" : "english-icon-mainpage_active"
          }
          alt=""
        />

        <img
          src={support}
          className={
            onActive ? "support-icon-mainpage" : "support-icon-mainpage_active"
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default Statistics;
