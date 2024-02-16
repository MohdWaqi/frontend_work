import "./header.css";
import { useNavigate } from "react-router-dom";
import userIcon from "../assets/user.png"
import homeIcon from "../assets/home.png"
const Header = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  const home = () => {
    navigate("/");
  };
  return (
    <nav className="navbar">
      <div className="navbar-container cont">
        <img onClick={login} src={userIcon} id="getIn"/>
        <ul className="menu-items">
          <li>
            <img onClick={home} src={homeIcon}/>
          </li>
          <li>
            <img onClick={login} src={userIcon}/>
          </li>
        </ul>
        <img
          onClick={home}
          className="logo"
          src="https://lh3.googleusercontent.com/fife/AKsag4PnPKTKzsflCclWJAaPIYft1yS2khIgl6rHGkoPAwx4brP340-lTpQ9tzCFjmJBHebpKlIQMlMlFUWWbMcU2cZ8jWFBZvJT-FAS9uqF27VdHB9cNitJo-gv1nCP_oBTV4PvtDosCUhJ-Bpedrx4KAv_g4b7OXrBSTr7JI2BaDEuMcviGu4TQmeIrLicMd25XmVyv4Zrpusm20fGwsodOihpEDnHS-U1Y7fdDN77_t2PQd1rviSkmAQ-1O9PlB4KSwXXjLhuJbIiiiv3qdnb0dk4sBEWV8zlxWji_u-u4HKvhBK4KEyEKqLmDM3jHKs0JQ5x3HAkKekpsezSck9qZ6lz99VNgCmlDiIhBdVHbfoGG3WlnO2cl9ZqNlsbfQHO-WmekE90vFAluUMzsuaKZ0MbmPojACqSIimy9KGUjWwew1hEcZxqhkaSV-j-ZxZdKtQJ1edjdyKk9rXyuIJF5VLEHaqo6FU8baJA76OvKub1tLsX6vbAfLJlChz2x9tLsEw96dpUNlae8HQUeukHpAzTpylWEJosR8Rl895BQZrZmpqSequ_aJGJZSp6kFRMeaLS5kG0tLOW0XB67Y79g-vY0hzJGJ78_g3I5-w_cdRML-2Bdf3II_0egFOSMxLLvQTZO6W-RaYrkkNeV8ixwI-GbODAsaCefWRBgacT-QT6riiTaHh_e1QZ5Krdx7TzcsI6pTHmHDweiWh83Ju6eOJR5OInToWZx9BhtDtTKDpUx5nRSuDrBkP0EYQwrANg1CjbESVGleoi2rLmHED7TTDQNvL90NxChlcNXGpmgMt8h0dOG4XC33vfhoqG5_Y0BOv0pI97yNBuOVikse54W-R7VfUqnirhPSZoqv-JUXnzIxrNCTDcaiYxluAgCR5kYWj3xgdi7vcZObOxro41OFs5Cf0-vZj8UuHrZ6O_2ICnC4uYaE1BvEjj783cgE7IH_u9f3AQIqM3kt3Qm-kizxynk3bkbqjHcx1BLrO-k53NCE3MBs4_Wtfhn-aZbC7px2NphDeeysgapje0c4M9dISAqJI_TBOoPXsf4DV9MCl3HZtmeF2wRaDq7yB8FW8yDX7n_KrEHLbfXEhV2xGi0lJfbTFzATEzCvGla2BTk9Dqg_-XhVTEFI_8-BE8jlOhaZHrYfd-fWBvGOOM3WBZzhvb2h2FAyxyDDnCJDISiDbNU7GNn_r544Dzl615k_DOPsqGAJPjbFHw01a7WNGWnkBmBVc5batRu61B-CXBTXI0D-51YofNd5mIEZ-dtJb8IV7umg4kHQb5caFAIcuANpyNTPV5IW_zZkAfHop-H3Scv7fztemxOFV9md29sysUR2fRWJbzOY_RFHgFpUGsEKd-RVWYFrLhEa5t8AqVdHbyN7IUc-fijG68r1PqDQvo6z1caY7HonUD0i6KG1rqU1XekCAhuYEovYwO1ZPtdt1wnW9OH0nU5gYGpxrXN_glE7rEDIgV7iXjDRjjS-lKN8o8ifeEmKeEg8CTmw6G7REGc4B9Da_Xe3KZifmVSoPY2KVPRsSXvPR22JYtq3375FO7lP_1SMWR_CCZOUsftIK2SdE2bs7cx4LAfg=w1920-h923"

          alt="Logo"
        ></img>
      </div>
    </nav>
  );
};

export default Header;
