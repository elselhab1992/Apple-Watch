import logo from "../../assets/navbrand.png";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

import {
  Header,
  NavLinks,
  MobileLinks,
  NavLink,
  Search,
  Input,
  MenuIcons,
} from "./NavbarStyles";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <Header>
      <img src={logo} alt="logo" />
      <nav>
        {/* desktop links */}
        <NavLinks>
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>About Us</NavLink>
          </li>
          <li>
            <NavLink>Find Us</NavLink>
          </li>
          <li>
            <NavLink>Smartwatch</NavLink>
          </li>
          <li>
            <NavLink>Subscribe</NavLink>
          </li>
        </NavLinks>
        {/* mobile links */}
        {click && (
          <MobileLinks menu={+click}>
            <li>
              <NavLink onClick={closeMenu}>Home</NavLink>
            </li>
            <li>
              <NavLink onClick={closeMenu}>About Us</NavLink>
            </li>
            <li>
              <NavLink onClick={closeMenu}>Find Us</NavLink>
            </li>
            <li>
              <NavLink onClick={closeMenu}>Smartwatch</NavLink>
            </li>
            <li>
              <NavLink onClick={closeMenu}>Subscribe</NavLink>
            </li>
          </MobileLinks>
        )}
      </nav>
      <MenuIcons onClick={handleClick}>
        {click ? (
          <FaTimes size={30} style={{ color: "#000", cursor: "pointer" }} />
        ) : (
          <GiHamburgerMenu
            size={30}
            style={{ color: "#000", cursor: "pointer" }}
          />
        )}
      </MenuIcons>
      <Search>
        <Input
          type="search"
          id="search"
          name="search"
          placeholder="search ..."
        />
        <IoSearch
          size={30}
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: 5,
            cursor: "pointer",
          }}
        />
      </Search>
    </Header>
  );
};

export default Navbar;
