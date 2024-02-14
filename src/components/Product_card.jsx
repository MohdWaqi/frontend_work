import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

function Card(props) {
  let visibility = props.state;
  const {isAuth} = useContext(AuthContext)
  return (
    <div className="card">
      <div>
        <img src={props.image} alt="item" />
        <h3>{props.name.toUpperCase()}</h3>
        {(visibility && isAuth) && (
          <div>
            <button >
              <NavLink to={`/edit/${props.id}`}>
                <EditIcon className="editbtn"></EditIcon>
              </NavLink>
            </button>

            <button
              onClick={() => {
                props.delete(props.id);
              }}
            >
              <DeleteIcon></DeleteIcon>
            </button>
          </div>
        )}
      </div>
      <div >
        <table>
          <thead>
            <tr>
              <th>{props.size1}</th>
              {props.size2 && <th>{props.size2}</th>}
              {props.size3 && <th>{props.size3}</th>}
              {props.size4 && <th>{props.size4}</th>}
              {props.size5 && <th>{props.size5}</th>}
              {props.size6 && <th>{props.size6}</th>}
              {props.size7 && <th>{props.size7}</th>}
              {props.size8 && <th>{props.size8}</th>}
              {props.size9 && <th>{props.size9}</th>}
              {props.size10 && <th>{props.size10}</th>}
              {props.size11 && <th>{props.size11}</th>}
              {props.size12 && <th>{props.size12}</th>}
              {props.size13 && <th>{props.size13}</th>}
              {props.size14 && <th>{props.size14}</th>}
              {props.size15 && <th>{props.size15}</th>}
              {props.size16 && <th>{props.size16}</th>}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.sell1}</td>
              {props.sell2 && <td>{props.sell2}</td>}
              {props.sell3 && <td>{props.sell3}</td>}
              {props.sell4 && <td>{props.sell4}</td>}
              {props.sell5 && <td>{props.sell5}</td>}
              {props.sell6 && <td>{props.sell6}</td>}
              {props.sell7 && <td>{props.sell7}</td>}
              {props.sell8 && <td>{props.sell8}</td>}
              {props.sell9 && <td>{props.sell9}</td>}
              {props.sell10 && <td>{props.sell10}</td>}
              {props.sell11 && <td>{props.sell11}</td>}
              {props.sell12 && <td>{props.sell12}</td>}
              {props.sell13 && <td>{props.sell13}</td>}
              {props.sell14 && <td>{props.sell14}</td>}
              {props.sell15 && <td>{props.sell15}</td>}
              {props.sell16 && <td>{props.sell16}</td>}
            </tr>
            <tr>
              <td>{props.wgt1}</td>
              {props.wgt2 && <td>{props.wgt2}</td>}
              {props.wgt3 && <td>{props.wgt3}</td>}
              {props.wgt4 && <td>{props.wgt4}</td>}
              {props.wgt5 && <td>{props.wgt5}</td>}
              {props.wgt6 && <td>{props.wgt6}</td>}
              {props.wgt7 && <td>{props.wgt7}</td>}
              {props.wgt8 && <td>{props.wgt8}</td>}
              {props.wgt9 && <td>{props.wgt9}</td>}
              {props.wgt10 && <td>{props.wgt10}</td>}
              {props.wgt11 && <td>{props.wgt11}</td>}
              {props.wgt12 && <td>{props.wgt12}</td>}
              {props.wgt13 && <td>{props.wgt13}</td>}
              {props.wgt14 && <td>{props.wgt14}</td>}
              {props.wgt15 && <td>{props.wgt15}</td>}
              {props.wgt16 && <td>{props.wgt16}</td>}
            </tr>
            <tr>
              <td>{props.price1}</td>
              {props.price2 && <td>{props.price2}</td>}
              {props.price3 && <td>{props.price3}</td>}
              {props.price4 && <td>{props.price4}</td>}
              {props.price5 && <td>{props.price5}</td>}
              {props.price6 && <td>{props.price6}</td>}
              {props.price7 && <td>{props.price7}</td>}
              {props.price8 && <td>{props.price8}</td>}
              {props.price9 && <td>{props.price9}</td>}
              {props.price10 && <td>{props.price10}</td>}
              {props.price11 && <td>{props.price11}</td>}
              {props.price12 && <td>{props.price12}</td>}
              {props.price13 && <td>{props.price13}</td>}
              {props.price14 && <td>{props.price14}</td>}
              {props.price15 && <td>{props.price15}</td>}
              {props.price16 && <td>{props.price16}</td>}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Card;
