import React from "react";
import styles from "./NavBar.module.scss";
import Logo from "components/Logo/Logo";
import classNames from "classnames";
import { RiShoppingCart2Line, RiShoppingCartFill } from "react-icons/ri";
import Busca from "components/Busca";
import { Link, useLocation } from "react-router-dom";

const iconProps = {
  color: "white",
  size: 24,
};

export default function NavBar() {

  const location = useLocation()

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.links}>
        <div>
          <Link
            to="/"
            className={classNames(styles.link, {
              [styles['link--selected']]: location.pathname === "/",
            })}
          >
            Pagina Inicial
          </Link>
        </div>
      </div>
      <div className={styles.busca}>
        <Busca />
      </div>
      <div className={styles.icones}>
        <Link to="/carrinho">
          {window.location.pathname === "/carrinho" ? (
            <RiShoppingCartFill {...iconProps} />
          ) : (
            <RiShoppingCart2Line {...iconProps} />
          )}
        </Link>
      </div>
    </nav>
  );
}
