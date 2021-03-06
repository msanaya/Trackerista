import React from "react";
import { slide as Menu } from "react-burger-menu";

function BurgerMenu(props) {

  return (
    <Menu right {...props}>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/components/display">
        Display
      </a>
      <a className="menu-item" href="/components/createPage">
        Create
      </a>
    </Menu>
  );
};

export default BurgerMenu;