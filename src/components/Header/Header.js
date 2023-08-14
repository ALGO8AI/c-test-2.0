import React from "react";
import { algo, cairn } from "../../assets";
import Styles from "./Header.module.scss";

function Header({ isLoggedIn, logOut }) {
  return (
    <div className={Styles.Header_Container}>
      <div className={Styles.Left}>
        <img src={algo} alt="Algo" />
      </div>
      <h1>VISCOSITY PREDICTION</h1>
      <div className={Styles.Logout}>
        <img src={cairn} alt="Cairn" />
        {isLoggedIn && <button onClick={logOut}>Logout</button>}
      </div>
    </div>
  );
}

export default Header;
