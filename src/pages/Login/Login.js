import React, { useCallback, useEffect, useState } from "react";
import { algo, cairn } from "../../assets";
import Styles from "./Login.module.scss";

function Login({
  user,
  setUser,
  login,
  error,
  passwordVisible,
  setPasswordVisible,
  captcha,
  setCaptcha,
  enterCaptcha,
  setEnterCaptcha,
}) {
  const generateCaptcha = useCallback(() => {
    setCaptcha(Math.floor(Math.random() * 99999).toString());
  }, []);

  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div className={Styles.Login_Container}>
      <div className={Styles.Left}>
        <div className={Styles.Heading}>
          <h1>VISCOSITY PREDICTION</h1>
        </div>
        <div className={Styles.Title}>
          <div className={Styles.Algo}>
            <img src={algo} alt="Algo" />
            <div className={Styles.Bar}></div>
            <p>an algo8.ai product</p>
          </div>
          <img src={cairn} alt="Cairn" />
        </div>
      </div>
      <div className={Styles.Right}>
        <div className={Styles.Input_Container}>
          <h2>Login</h2>
          <label>
            Username
            <input
              type="text"
              placeholder="Username"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              autoComplete="off"
            />
          </label>
          <label>
            Password
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              autoComplete="off"
            />
          </label>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <input
              checked={passwordVisible}
              onChange={(e) => setPasswordVisible(e.target.checked)}
              type="checkbox"
              style={{ marginRight: "0.5rem" }}
            />{" "}
            Show Password
          </label>

          <div className={Styles.Captcha}>
            {captcha.split("").map((item, index) => (
              <span
                className={
                  index === 2
                    ? Styles.Rotate
                    : index === 4
                    ? Styles.Underline
                    : Styles.Transform
                }
              >
                {item}
              </span>
            ))}
            <span
              onClick={() => {
                setCaptcha(Math.floor(Math.random() * 99999).toString());
                setEnterCaptcha("");
              }}
              style={{
                marginLeft: "1rem",
                cursor: "pointer",
              }}
            >
              🔃
            </span>
            <input
              placeholder="Enter Captcha"
              value={enterCaptcha}
              onChange={(e) => setEnterCaptcha(e.target.value)}
            />
          </div>
          {error?.visible && (
            <div className={Styles.Error}>
              <p>{error?.message}</p>
            </div>
          )}
          <button onClick={login}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
