import { Link } from "react-router-dom";
import { NavBarStyle } from "../styles/NavBar";

function NavBar() {
  return (
    <NavBarStyle>
      <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/users'>Users</Link>
    </NavBarStyle>);
}

export default NavBar;