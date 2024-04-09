import React from "react";
import styles from "./NavBar.module.scss";
import Logo from "components/Logo/Logo";
import classNames from "classnames";
import {
  RiShoppingCart2Line,
  RiShoppingCartFill
} from 'react-icons/ri'
import Busca from "components/Busca";

export default function NavBar() {
const iconProps = {
  color: 'white',
  size: 24
}

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.links}>
        <div>
          <a href="/aasdasds" className={classNames(styles.link, {
            [styles.selected]: window.location.pathname === '/'
          })}>Pagina Inicial</a>
        </div>
      </div>
      <div className={styles.busca}>
          <Busca />
      </div>
      <div className={styles.icones}>
          <a href="/asdasd">
            { window.location.pathname === '/carrinho'
            ? <RiShoppingCartFill {...iconProps} />
            : <RiShoppingCart2Line {...iconProps} /> }
          </a>
      </div>
    </nav>
  );
}
