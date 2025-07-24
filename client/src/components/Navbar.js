import React, { useContext, useState, useEffect } from "react";
import { Context } from "..";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import {
  ADMIN_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
} from "../utils/consts";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { getUserRole } from "../http/userAPI";
import { fetchBasketItems } from "../http/clothAPI";
import BasketModal from "./modals/BasketModal";
import { toJS } from "mobx";

const Navbar = observer(() => {
  const { user, cloth } = useContext(Context);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRole = async () => {
      const role = await getUserRole();
      user.setUserRole(role);
    };
    fetchRole();
  }, []);

  useEffect(() => {
    fetchBasketItems().then((data) => {
      cloth.setBasketItems(data);
      console.log(toJS(cloth.basketItems));
    });
  }, []);

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.removeItem("token");
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const toggleBasketModal = () => setIsBasketOpen((prev) => !prev);

  return (
    <>
      <BasketModal
        isOpen={isBasketOpen}
        onClose={() => setIsBasketOpen(false)}
      />
      <div className={styles.container}>
        <NavLink to={HOME_ROUTE} className={styles.linkLogo}>
          FASCO
        </NavLink>

        <button className={styles.burger} onClick={toggleMenu}>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>

        <div
          className={`${styles.linksContainer} ${
            menuOpen ? styles.menuOpen : ""
          }`}
        >
          <a href="#" className={styles.links}>
            Home
          </a>
          <a href="#" className={styles.links}>
            Deals
          </a>
          <a href="#" className={styles.links}>
            New Arrivals
          </a>
          <a href="#" className={styles.links}>
            Packages
          </a>
          {user.isAuth ? (
            <>
              {user.userRole === "ADMIN" ? (
                <button
                  onClick={() => navigate(ADMIN_ROUTE)}
                  className={styles.links}
                  style={{ fontWeight: 800 }}
                >
                  Admin panel
                </button>
              ) : (
                <button className={styles.basket} onClick={toggleBasketModal}>
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 5C14 2.24297 11.757 0 9 0C6.24297 0 4 2.24297 4 5H0.25V16.875C0.25 18.6009 1.6491 20 3.375 20H14.625C16.3509 20 17.75 18.6009 17.75 16.875V5H14ZM9 1.875C10.7231 1.875 12.125 3.27688 12.125 5H5.875C5.875 3.27688 7.27688 1.875 9 1.875ZM15.875 16.875C15.875 17.5643 15.3143 18.125 14.625 18.125H3.375C2.68574 18.125 2.125 17.5643 2.125 16.875V6.875H4V8.4375C4 8.95527 4.41973 9.375 4.9375 9.375C5.45527 9.375 5.875 8.95527 5.875 8.4375V6.875H12.125V8.4375C12.125 8.95527 12.5447 9.375 13.0625 9.375C13.5803 9.375 14 8.95527 14 8.4375V6.875H15.875V16.875Z"
                      fill="#484848"
                      stroke="#484848"
                      strokeWidth="0.0390625"
                    />
                  </svg>
                  {cloth.basketItems.length > 0 && (
                    <span className={styles.badge}>
                      {cloth.basketItems.length}
                    </span>
                  )}
                </button>
              )}
              <button className={styles.signup} onClick={() => logOut()}>
                Exit
              </button>
            </>
          ) : (
            <>
              <button
                className={styles.links}
                onClick={() => navigate(LOGIN_ROUTE)}
              >
                Sign in
              </button>
              <button
                className={styles.signup}
                onClick={() => navigate(REGISTRATION_ROUTE)}
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
});

export default Navbar;
