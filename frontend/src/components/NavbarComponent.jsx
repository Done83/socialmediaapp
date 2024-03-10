import logo from '../assets/logo.png';

// NavLink import
import { NavLink } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <nav className="navigation">
      <img src={logo} alt="" className="ml-[20px] h-[30px]" />

      <div className="flex items-center gap-[20px] mr-[35px]">
        <NavLink to="/register" className="button">
          Register
        </NavLink>
        <NavLink to="/login" className="button">
          Login
        </NavLink>
      </div>
    </nav>
  );
};
export default NavbarComponent;
