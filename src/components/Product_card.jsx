import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50vw",
  bgcolor: '#ffe7bb',
  boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  borderRadius: "20px",
  p: 4,
};

function Card(props) {
  let visibility = props.state;
  const {isAuth} = useContext(AuthContext)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="card">
      <div>
        <img className="productImage" src={props.image} alt="item" />
        <h3>{props.name.toUpperCase()}</h3>
        {(visibility && isAuth?.roles?.includes(5150)) && (
          <div>
            <button >
              <NavLink to={`/edit/${props.id}`}>
                <EditIcon className="editbtn"></EditIcon>
              </NavLink>
            </button>

            <button
              onClick={handleOpen}
            >
              <DeleteIcon></DeleteIcon>
            </button>
            <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Are you sure want to Delete?
    </Typography>
    <Stack direction="row" justifyContent={{xs:"space-around", md:"center"}} gap={{md:"5rem"}} marginTop="2rem">
    <Button variant="contained" color="success" onClick={() => {
                props.delete(props.id);
              }}>Yes</Button>
    <Button variant="contained" color="error" onClick={handleClose}>NO</Button>
    </Stack>
  </Box>
</Modal>
          </div>
        )}
      </div>
      {(visibility && isAuth?.roles?.includes(5150)) &&<div >
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
      </div>}
    </div>
  );
}
export default Card;
