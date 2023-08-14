import React, { useEffect, useState } from "react";
import Styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import axios from "axios";

const USERS = [
  {
    username: "cairn",
    password: "E1qLFV^9N7#2",
  },
  {
    username: "MWPengineer",
    password: "$MWP@8217",
  },
  {
    username: "Dharmesh Mehta",
    password: "#Dharmesh@8906",
  },
  {
    username: "Himshella",
    password: "&Himshella@8724",
  },
  {
    username: "Optengineer",
    password: "&Optengineer@8927",
  },
];

function App() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState({
    visible: false,
    message: "",
  });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [currentTab, setCurrrentTab] = useState("Home");

  const actveLink = {
    Home: "http://40.81.238.141:3000/embed/dashboard/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6eyJkYXNoYm9hcmQiOjF9LCJwYXJhbXMiOnt9LCJpYXQiOjE2Njg2MDUzNjB9.0TG_FOJZk8BvYxrLpZZERtLyWjMUP1nY4ny6NPq9tho#bordered&titled",
    "CPF Details":
      "http://40.81.238.141:3000/embed/dashboard/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6eyJkYXNoYm9hcmQiOjJ9LCJwYXJhbXMiOnt9LCJpYXQiOjE2Njg2MDU0MTB9.4dKe1x-WHIp8ZbViYMdb2ulIgOJK3Hz_LO6puUfH_qs#bordered&titled",
    "Well Details":
      "http://40.81.238.141:3000/embed/dashboard/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6eyJkYXNoYm9hcmQiOjV9LCJwYXJhbXMiOnt9fQ.o7CWGJ3A8UH9jQj5LRLROx8Dt5QePvxBKkiG2OoJIIQ#bordered=true&titled=true",
    "Well Pad Details":
      "http://40.81.238.141:3000/embed/dashboard/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZSI6eyJkYXNoYm9hcmQiOjN9LCJwYXJhbXMiOnt9LCJpYXQiOjE2Njg2MDU0Njh9.cRpfIWXaprvLQm-Mf-uJG0LfvDXSp2ej97YG_L_nUdQ#bordered&titled",
  };

  const CheckError = (param = "Imvalid Cred") => {
    if (!user[param]?.trim("")) {
      setError({
        visible: true,
        message: `Please enter your ${param} !`,
      });
    }

    setTimeout(() => {
      setError({
        visible: false,
        message: "",
      });
    }, 2000);
  };

  const login = async () => {
    try {
      if (!user.email.trim("")) {
        return CheckError("username");
      }
      if (!user.password.trim("")) {
        return CheckError("password");
      }

      let { data } = await axios.post("https://cairn.azurewebsites.net/login", {
        username: user?.email,
        password: user?.password,
      });
      if (data?.message === "Login successful.") {
        setIsLoggedIn(true);
        localStorage.setItem("cairn_isLoggedIn", true);
        localStorage.setItem("cairn_user", user.email);
        setUser({
          email: "",
          password: "",
        });
      } else {
        alert("In else");
        CheckError();
      }
    } catch (e) {
      console.log(e.message);
      CheckError(e.message);
    }
    // var data = JSON.stringify({
    //   username: user?.email,
    //   password: user?.password,
    // });

    // var config = {
    //   method: "post",
    //   url: "https://cairn.azurewebsites.net/login",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data: data,
    // };

    // axios(config)
    //   .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  const loadUser = () => {
    const user = localStorage.getItem("cairn_user");
    const isLoggedIn = localStorage.getItem("cairn_isLoggedIn");
    if (isLoggedIn && user === "cairn") {
      setIsLoggedIn(true);
    }
  };

  const logOut = async () => {
    const { data } = await axios.post("https://cairn.azurewebsites.net/logout");
    console.log(data);
    setIsLoggedIn(false);
    localStorage.setItem("cairn_isLoggedIn", false);
    localStorage.setItem("cairn_user", "");
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className={Styles.App_Container}>
      {/* <Header
        isLoggedIn={isLoggedIn}
        logOut={() => {
          setIsLoggedIn(false);
          localStorage.setItem("cairn_isLoggedIn", false);
          localStorage.setItem("cairn_user", "");
        }}
      /> */}
      {!isLoggedIn ? (
        // <div className={Styles.Form_Container}>
        //   <div className={Styles.Form}>
        //     <h2>Sign In</h2>
        //     <input
        //       className={Styles.Username}
        // placeholder="Username"
        // value={user.email}
        // onChange={(e) => setUser({ ...user, email: e.target.value })}
        //     />
        //     <div className={Styles.Password}>
        //       <input
        //         type={passwordVisible ? "text" : "password"}
        //         placeholder="Password"
        //         value={user.password}
        //         onChange={(e) => setUser({ ...user, password: e.target.value })}
        //       />

        //       <button
        //         className={Styles.Password_Visibility}
        //         onClick={() => setPasswordVisible(!passwordVisible)}
        //       >
        //         {passwordVisible ? (
        //           <i class="fa-solid fa-eye"></i>
        //         ) : (
        //           <i class="fa-solid fa-eye-slash"></i>
        //         )}
        //       </button>
        //     </div>
        //     <button className={Styles.SignIn} onClick={login}>
        //       Sign In
        //     </button>
        //   </div>
        // </div>
        <Login
          user={user}
          setUser={setUser}
          login={login}
          error={error}
          setError={setError}
          passwordVisible={passwordVisible}
          setPasswordVisible={setPasswordVisible}
        />
      ) : (
        // <div className={Styles.Iframe_Container}>
        //   <div className={Styles.Tabs}>
        // {["Home", "CPF Details", "Well Details", "Well Pad Details"].map(
        //   (tab, index) => (
        //     <button
        //       onClick={() => setCurrrentTab(tab)}
        //       style={{
        //         backgroundColor: currentTab === tab ? "#404040" : "#fff",
        //         color: currentTab === tab ? "#fff" : "#404040",
        //       }}
        //     >
        //       {tab}
        //     </button>
        //   )
        // )}
        //   </div>
        //   <iframe
        //     src={actveLink[currentTab]}
        //     style={{ backgroundColor: "white" }}
        //     title="Cairn"
        //   ></iframe>
        // </div>
        <Home
          actveLink={actveLink}
          currentTab={currentTab}
          setCurrrentTab={setCurrrentTab}
          logOut={logOut}
        />
      )}
    </div>
  );
}

export default App;
