import Dimensions from "../../components/Dimensions";
import AddIcon from "@mui/icons-material/Add";
import FormInput from "../../components/Field";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Add.css";
import { privateRefresh } from "../../services/ApiCall";

function Add() {
  let fields = [
    "1 :",
    "2 :",
    "3 :",
    "4 :",
    "5 :",
    "6 :",
    "7 :",
    "8 :",
    "9 :",
    "10 :",
    "11 :",
    "12 :",
    "13 :",
    "14 :",
    "15 :",
    "16 :",
  ];
  const [addData, setAddData] = useState({
    name: "",
    image: "",
    size0: "",
    sell0: "",
    weight0: "",
    price0: "",
    size1: "",
    sell1: "",
    weight1: "",
    price1: "",
    size2: "",
    sell2: "",
    weight2: "",
    price2: "",
    size3: "",
    sell3: "",
    weight3: "",
    price3: "",
    size4: "",
    sell4: "",
    weight4: "",
    price4: "",
    size5: "",
    sell5: "",
    weight5: "",
    price5: "",
    size6: "",
    sell6: "",
    weight6: "",
    price6: "",
    size7: "",
    sell7: "",
    weight7: "",
    price7: "",
    size8: "",
    sell8: "",
    weight8: "",
    price8: "",
    size9: "",
    sell9: "",
    weight9: "",
    price9: "",
    size10: "",
    sell10: "",
    weight10: "",
    price10: "",
    size11: "",
    sell11: "",
    weight11: "",
    price11: "",
    size12: "",
    sell12: "",
    weight12: "",
    price12: "",
    size13: "",
    sell13: "",
    weight13: "",
    price13: "",
    size14: "",
    sell14: "",
    weight14: "",
    price14: "",
    size15: "",
    sell15: "",
    weight15: "",
    price15: "",
  });
  const [required, setRequired] = useState("");
  const navigate = useNavigate();
  const setValues = (e) => {
    const { name, value } = e.target;
    setAddData({ ...addData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      name,
      image,
      size0,
      sell0,
      weight0,
      price0,
      size1,
      sell1,
      weight1,
      price1,
      size2,
      sell2,
      weight2,
      price2,
      size3,
      sell3,
      weight3,
      price3,
      size4,
      sell4,
      weight4,
      price4,
      size5,
      sell5,
      weight5,
      price5,
      size6,
      sell6,
      weight6,
      price6,
      size7,
      sell7,
      weight7,
      price7,
      size8,
      sell8,
      weight8,
      price8,
      size9,
      sell9,
      weight9,
      price9,
      size10,
      sell10,
      weight10,
      price10,
      size11,
      sell11,
      weight11,
      price11,
      size12,
      sell12,
      weight12,
      price12,
      size13,
      sell13,
      weight13,
      price13,
      size14,
      sell14,
      weight14,
      price14,
      size15,
      sell15,
      weight15,
      price15,
    } = addData;
    if (
      name === "" ||
      image === "" ||
      size0 === "" ||
      sell0 === "" ||
      weight0 === "" ||
      price0 === ""
    ) {
      setRequired(
        "Name, Image, Size 1, sell 1, Weight 1 and price 1 fields are required"
      );
    } else {
      const data = new FormData();
      data.append("name", name);
      data.append("image", image);
      data.append("size0", size0);
      data.append("sell0", sell0);
      data.append("weight0", weight0);
      data.append("price0", price0);
      data.append("size1", size1);
      data.append("sell1", sell1);
      data.append("weight1", weight1);
      data.append("price1", price1);
      data.append("size2", size2);
      data.append("sell2", sell2);
      data.append("weight2", weight2);
      data.append("price2", price2);
      data.append("size3", size3);
      data.append("sell3", sell3);
      data.append("weight3", weight3);
      data.append("price3", price3);
      data.append("size4", size4);
      data.append("sell4", sell4);
      data.append("weight4", weight4);
      data.append("price4", price4);
      data.append("size5", size5);
      data.append("sell5", sell5);
      data.append("weight5", weight5);
      data.append("price5", price5);
      data.append("size6", size6);
      data.append("sell6", sell6);
      data.append("weight6", weight6);
      data.append("price6", price6);
      data.append("size7", size7);
      data.append("sell7", sell7);
      data.append("weight7", weight7);
      data.append("price7", price7);
      data.append("size8", size8);
      data.append("sell8", sell8);
      data.append("weight8", weight8);
      data.append("price8", price8);
      data.append("size9", size9);
      data.append("sell9", sell9);
      data.append("weight9", weight9);
      data.append("price9", price9);
      data.append("size10", size10);
      data.append("sell10", sell10);
      data.append("weight10", weight10);
      data.append("price10", price10);
      data.append("size11", size11);
      data.append("sell11", sell11);
      data.append("weight11", weight11);
      data.append("price11", price11);
      data.append("size12", size12);
      data.append("sell12", sell12);
      data.append("weight12", weight12);
      data.append("price12", price12);
      data.append("size13", size13);
      data.append("sell13", sell13);
      data.append("weight13", weight13);
      data.append("price13", price13);
      data.append("size14", size14);
      data.append("sell14", sell14);
      data.append("weight14", weight14);
      data.append("price14", price14);
      data.append("size15", size15);
      data.append("sell15", sell15);
      data.append("weight15", weight15);
      data.append("price15", price15);

      const config = {
        "Content-Type": "multipart/form-data",
      };
      try {
        const response = await privateRefresh.post("/add", data, {
          headers: config,
        });
        console.log(response);
        setAddData({
          ...addData,
          name: "",
          image: "",
          size0: "",
          sell0: "",
          weight0: "",
          price0: "",
          size1: "",
          sell1: "",
          weight1: "",
          price1: "",
          size2: "",
          sell2: "",
          weight2: "",
          price2: "",
          size3: "",
          sell3: "",
          weight3: "",
          price3: "",
          size4: "",
          sell4: "",
          weight4: "",
          price4: "",
          size5: "",
          sell5: "",
          weight5: "",
          price5: "",
          size6: "",
          sell6: "",
          weight6: "",
          price6: "",
          size7: "",
          sell7: "",
          weight7: "",
          price7: "",
          size8: "",
          sell8: "",
          weight8: "",
          price8: "",
          size9: "",
          sell9: "",
          weight9: "",
          price9: "",
          size10: "",
          sell10: "",
          weight10: "",
          price10: "",
          size11: "",
          sell11: "",
          weight11: "",
          price11: "",
          size12: "",
          sell12: "",
          weight12: "",
          price12: "",
          size13: "",
          sell13: "",
          weight13: "",
          price13: "",
          size14: "",
          sell14: "",
          weight14: "",
          price14: "",
          size15: "",
          sell15: "",
          weight15: "",
          price15: "",
        });
        navigate("/");
      } catch (error) {
        console.log(error); 
        setRequired("Unable to post product, Please try again");
      }
    }
  };
  return (
    <div className="masterEdit">
      <form className="edit" method="post">
        <h1>
          <AddIcon fontSize="large"></AddIcon> Add Items
        </h1>
        <div>
          {required.length > 1 && (
            <p style={{ color: "red", fontSize: "1rem", padding: "0 3rem" }}>
              {required}
            </p>
          )}
          <FormInput
            title="name"
            label="Name :"
            status="text"
            value={setValues}
            field={addData["name"]}
          ></FormInput>
        </div>
        <div>
          <FormInput
            title="image"
            label="Image :"
            status="url"
            value={setValues}
            field={addData["image"]}
          ></FormInput>
        </div>
        {fields.map((element, i) => (
          <Dimensions
            key={i}
            index={i}
            heading={element}
            method={setValues}
            data={addData}
          ></Dimensions>
        ))}
        <div id="btn">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}
export default Add;
