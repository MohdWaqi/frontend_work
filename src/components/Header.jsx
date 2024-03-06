import "./header.css";
import { useNavigate } from "react-router-dom";
import userIcon from "../assets/user.png"
import homeIcon from "../assets/home.png"
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import logoutIcon from "../assets/logout.png"
import { logoutUser } from "../services/Api";
import logo from "../assets/logo.png"
const Header = () => {
  const navigate = useNavigate();
  const{isAuth, setAuth} = useContext(AuthContext)
  const login = () => {
    navigate("/login");
  };
  const home = () => {
    navigate("/");
  };
  const logout = async() => {
    await logoutUser(true)
    sessionStorage.removeItem('authData');
    setAuth(null);
    navigate("/")
  }
  return (
    <nav className="navbar">
      <div className="navbar-container cont">
        {isAuth?.accessToken?<img onClick={logout} src={logoutIcon} className="getIn"/>:<img onClick={login} src={userIcon} className="getIn"/>}
        <ul className="menu-items">
          <li>
            <img onClick={home} src={homeIcon}/>
          </li>
          <li>
            {isAuth?.accessToken?<img onClick={logout} src={logoutIcon} />:<img onClick={login} src={userIcon}/>}
          </li>
        </ul>
        <img
          onClick={home}
          className="logo"
          src={logo}

          alt="Logo"
        ></img>
      </div>
    </nav>
  );
};

export default Header;
