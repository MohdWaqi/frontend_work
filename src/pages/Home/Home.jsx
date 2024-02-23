import AddIcon from "@mui/icons-material/Add";
import "./Home.css";
import Card from "../../components/Product_card";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../services/Api";
import { AuthContext } from "../../Context/AuthContextProvider";
import { privateRefresh } from "../../services/ApiCall";
import { Triangle } from "react-loader-spinner";
import { debounce } from "lodash";
import phone from "../../assets/phone.png"

function Home() {
  const navigate = useNavigate();
  const add = () => {
    navigate("/add");
  };
  const [loading, setLoading] = useState(false)
  const [productData, setProductData] = useState([]);
  const {isAuth} = useContext(AuthContext)
  const [query, setQuery] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0)
  const itemsPerPage = 8;
  const [error, setError] = useState("")
  
  const debouncedSearch = debounce((searchQuery) => {
    setQuery(searchQuery);
  }, 1000);

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setLoading(true);
    debouncedSearch(searchQuery);
  };
 
  const allProducts = async () => {
    setLoading(true)
    try {
      const response = await getProducts(currentPage, itemsPerPage, query);
      setTotalPages(response.data.totalPages)
      setProductData(response.data.products);
      setLoading(false)
      
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
  };

  const removeSelected = async (id) => {
    const config = {
      headers: {
        Authorization: `Bearer ${isAuth.accessToken}`
      },
    };
    try {
     await privateRefresh.delete(`/delete/${id}`, config);
      allProducts();
      
    } catch (error) {
      setLoading(false)
      setError(error.message)
    }
    
  };
  useEffect(() => {
    allProducts();
  }, [currentPage, query]);
  function showItem() {
    setVisibility(!visibility);
  }
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="app">
      <div>
        <h1 className="home">Products</h1>

        <h2 style={{color: "#a8d9ec"}}>Call to Order</h2>
        <div className="callDetails">
        <div>
        <img src={phone} alt="phone"/>
        <h1 > +91 9897262934</h1>
        </div>
        <div>
        <img src={phone} alt="phone"/>
        <h1 > +91 8755075132</h1>
        </div>
        </div>
        <input
          placeholder="🔍 Search the Item Name"
          onChange={handleSearch}
        ></input>
      </div>
      {(visibility &&  isAuth?.roles?.includes(5150)) && (
        <button onClick={add} className="add">
          <AddIcon fontSize="large"></AddIcon>
        </button>
      )}
      <div className="container">
      {error!== "" ? <h1 style={{margin:"auto"}}>{error}</h1>:(loading?<div style={{margin:"auto"}}><Triangle
  visible={true}
  height="200"
  width="200"
  color="#B9DBF0"
  ariaLabel="triangle-loading"
  />
  </div>:<><button className="hiddenBtn" onClick={showItem}></button>
        {productData
          .map((product) => (
            <Card
              key={product._id}
              id={product._id}
              name={product.name}
              delete={removeSelected}
              state={visibility}
              image={product.image}
              size1={product.size0}
              size2={product.size1}
              size3={product.size2}
              size4={product.size3}
              size5={product.size4}
              size6={product.size5}
              size7={product.size6}
              size8={product.size7}
              size9={product.size8}
              size10={product.size9}
              size11={product.size10}
              size12={product.size11}
              size13={product.size12}
              size14={product.size13}
              size15={product.size14}
              size16={product.size15}
              price1={product.price0}
              price2={product.price1}
              price3={product.price2}
              price4={product.price3}
              price5={product.price4}
              price6={product.price5}
              price7={product.price6}
              price8={product.price7}
              price9={product.price8}
              price10={product.price9}
              price11={product.price10}
              price12={product.price11}
              price13={product.price12}
              price14={product.price13}
              price15={product.price14}
              price16={product.price15}
              sell1={product.sell0}
              sell2={product.sell1}
              sell3={product.sell2}
              sell4={product.sell3}
              sell5={product.sell4}
              sell6={product.sell5}
              sell7={product.sell6}
              sell8={product.sell7}
              sell9={product.sell8}
              sell10={product.sell9}
              sell11={product.sell10}
              sell12={product.sell11}
              sell13={product.sell12}
              sell14={product.sell13}
              sell15={product.sell14}
              sell16={product.sell15}
              wgt1={product.weight0}
              wgt2={product.weight1}
              wgt3={product.weight2}
              wgt4={product.weight3}
              wgt5={product.weight4}
              wgt6={product.weight5}
              wgt7={product.weight6}
              wgt8={product.weight7}
              wgt9={product.weight8}
              wgt10={product.weight9}
              wgt11={product.weight10}
              wgt12={product.weight11}
              wgt13={product.weight12}
              wgt14={product.weight13}
              wgt15={product.weight14}
              wgt16={product.weight15}
            ></Card>
          ))}</>)}
      </div>
      {productData.length && (
  <div className="pagination">
  <button disabled={currentPage==1} onClick={()=>paginate(currentPage-1)} className="pageBtn">{"<"} Previous</button>
    {Array.from({ length: totalPages }).map((_, index) => (
      <button key={index} style={{backgroundColor: (index+1)===currentPage&&"blue"}} onClick={() => paginate(index + 1)}>
        {index + 1}
      </button>
    ))}
    <button onClick={()=>paginate(currentPage+1)} disabled={currentPage==totalPages} className="pageBtn">Next {">"}</button>
  </div>
)}
    </div>
  );
}

export default Home;
