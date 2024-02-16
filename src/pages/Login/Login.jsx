import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect, useContext } from "react";
import { checkUser } from "../../services/Api";
import { AuthContext } from "../../Context/AuthContextProvider";
import Footer from "../../components/Footer";

function LogIn() {
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();

  const [loginData, setLoginData] = useState({user:"", pwd:""});
  const [errMsg, setErrMsg] = useState("");
  const {setAuth, isAuth} = useContext(AuthContext)
  
  useEffect( () => {
    userRef.current.focus();
  },[])

  useEffect( () => {
    setErrMsg("");
  }, [loginData.user, loginData.pwd])

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await checkUser(loginData, true);
      const accessToken = response?.data?.accessToken
      const roles = response?.data?.roles
      setAuth({...loginData, roles, accessToken})
      setLoginData({user:"", pwd:""})
      console.log(isAuth)
      console.log(response)
    } catch (error) {
      if(!error?.response){
        console.log(error)
        setErrMsg("No Server Response")
      }else if (error.response?.status === 400){
        console.log(loginData)
        setErrMsg("Missing Username or Password")
      }else if(error.response?.status === 404){
        setErrMsg("User not found Please Register first!")
      }
      else if (error.response?.status === 401){
        setErrMsg("Please Enter Correct Password!!")
      }else{
        setErrMsg("Login Failed")
      }
      errRef.current.focus();
    }
    // console.log(response.data);
  }  

  const register = () => {
    navigate("/register");
  };
  return (
    <div className="auth">
      <form onSubmit={handleSubmit}>
      <p
              ref={errRef}
              className={errMsg ? "errmsg" : "hide"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
        <h1>Login</h1>
        <div>
          <div>
            <label htmlFor="user">Username</label>
          </div>
          <input ref={userRef} autoComplete="off" onChange={(e) => setLoginData({...loginData, user: e.target.value})} value={loginData.user} id="user" type="text" required />
        </div>
        <div>
          <div>
            <label htmlFor="pwd">Password</label>
          </div>
          <input id="pwd" onChange={(e) => setLoginData({...loginData, pwd: e.target.value})} value={loginData.pwd} type="password" required />
        </div>
        <button>Login</button>
        <div>
          <p>
            Don't have an account? <span onClick={register}>Register</span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LogIn;