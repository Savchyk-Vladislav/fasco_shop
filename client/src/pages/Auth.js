import React, { useContext, useState } from "react";
import styles from "./Auth.module.css";
import PhotoForLoginPage from "../images/PhotoForLoginPage.png";
import PhotoForRegisterPage from "../images/PhotoForRegisterPage.png";
import GoogleLogo from "../images/GoogleLogo.png";
import EmailLogo from "../images/EmailLogo.png";
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Auth = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(user);
      user.setIsAuth(true);
      navigate(HOME_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        {isLogin ? (
          <img src={PhotoForLoginPage} alt="women" className={styles.photo} />
        ) : (
          <img
            src={PhotoForRegisterPage}
            alt="women"
            className={styles.photo}
          />
        )}
        <div className={styles.containerForForm}>
          <h1 className={styles.logo}>FASCO</h1>
          <div className={styles.form}>
            <h2 className={styles.signInToFASCO}>
              {isLogin ? "Sign In To FASCO" : "Sign Up To Fasco"}
            </h2>
            <div className={styles.signByGoogleOrEmail}>
              <a href="#" className={styles.linksGoogleEmail}>
                <img
                  src={GoogleLogo}
                  alt="googleLogo"
                  className={styles.linksLogo}
                />
                {isLogin ? "Sign in with Google" : "Sign up with Google"}
              </a>
              <a href="#" className={styles.linksGoogleEmail}>
                <img
                  src={EmailLogo}
                  alt="emailLogo"
                  className={styles.linksLogo}
                />
                {isLogin ? "Sign in with Email" : "Sign up with Email"}
              </a>
            </div>
            <div className={styles.divider}>
              <div className={styles.line}></div>
              <span>OR</span>
              <div className={styles.line}></div>
            </div>
            <form className={styles.form}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.formInput}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.formInput}
                required
              />

              <button
                type="button"
                className={styles.formButton}
                onClick={click}
              >
                {isLogin ? "Sign In" : "Sign Up"}
              </button>
              {isLogin ? (
                <NavLink
                  to={REGISTRATION_ROUTE}
                  className={styles.formButtonSecondary}
                >
                  Don't have an account? Register now
                </NavLink>
              ) : (
                <NavLink
                  to={LOGIN_ROUTE}
                  className={styles.formButtonSecondary}
                >
                  Already have an account? Sign In
                </NavLink>
              )}

              {isLogin ? (
                <a href="#" className={styles.formLink}>
                  Forget Password?
                </a>
              ) : (
                ""
              )}
            </form>
          </div>
          <NavLink to={SHOP_ROUTE} className={styles.terms}>
            FASCO Terms & Conditions
          </NavLink>
        </div>
      </div>
    </div>
  );
});

export default Auth;
