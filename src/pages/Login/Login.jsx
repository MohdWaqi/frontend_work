import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

function LogIn() {
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();

  const [loginData, setLoginData] = useState({user:"", password:""});
  const [errMsg, setErrMsg] = useState("");
  
  useEffect( () => {
    userRef.current.focus();
  },[])

  useEffect( () => {
    setErrMsg("");
  }, [loginData.user, loginData.password])

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(loginData);
  }  

  const register = () => {
    navigate("/register");
  };
  return (
    <div className="auth">
      <form action="" onSubmit={handleSubmit}>
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
          <input ref={userRef} autoComplete="off" onChange={(e) => setLoginData({...loginData, user: e.target.value})} id="user" type="text" required />
        </div>
        <div>
          <div>
            <label htmlFor="pwd">Password</label>
          </div>
          <input id="pwd" onChange={(e) => setLoginData({...loginData, password: e.target.value})} type="password" required />
        </div>
        <button>Login</button>
        <div>
          <p>
            Don't have an account? <a onClick={register} href="">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LogIn;
