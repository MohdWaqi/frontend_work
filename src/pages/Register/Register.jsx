
import { useState, useEffect, useRef } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { addUserFunction } from "../../services/Api";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.com$/;

function Register() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };
  const handleRegSubmit = async (e) => {
    e.preventDefault();
    const valid1 = USER_REGEX.test(user);
    const valid2 = PWD_REGEX.test(pwd);
    const valid3 = EMAIL_REGEX.test(email);
    if (!valid1 || !valid2 || !valid3) {
      setErrMsg("Invalid Entry");
    } else {
      const registerData = new FormData();
      registerData.append("user", user);
      registerData.append("pwd", pwd);
      registerData.append("email", email);

      const config = {
        "Content-Type": "multipart/form-data",
      };
      try {
        const response = await addUserFunction(registerData, config);
        setSuccess(true);
        
      } catch (error) {
    
        setErrMsg(error.response.data.message)
      }
      
    }
  };
  return (
    <>
      {success ? (
        <div className="auth success">
          <h1>Success!</h1>
          <p>
            Do you want to?{" "}
            <span onClick={login}>
              Login
            </span>
          </p>
        </div>
      ) : (
        <div className="auth">
          <form onSubmit={handleRegSubmit}>
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "hide"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1>Register</h1>
            <div>
              <div>
                <label htmlFor="username">
                  Username{" "}
                  <span className={validName ? "valid" : "hide"} >
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className={validName || !user ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
              </div>
              <input
                id="username"
                type="text"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                required
              />
            </div>
            <p
              id="uidnote"
              className={
                userFocus && user && !validName ? "instructions" : "hide"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters. <br />
              Must begin with a letter. <br />
              Letters, numbers, underscores, hyphens, allowed.
            </p>
            <div>
              <div>
                <label htmlFor="email">
                  Email{" "}
                  <span className={validEmail ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className={validEmail || !email ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
              </div>
              <input
                id="email"
                type="email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="emailnote"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                required
              />
            </div>
            <p
              id="emailnote"
              className={emailFocus && !validEmail ? "instructions" : "hide"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must be legit Email <br />
            </p>
            <div>
              <div>
                <label htmlFor="pwd">
                  Password{" "}
                  <span className={validPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span className={validPwd || !pwd ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
              </div>
              <input
                id="pwd"
                type="password"
                onChange={(e) => setPwd(e.target.value)}
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                required
              />
            </div>
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "hide"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters. <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters: !@#$%
            </p>
            <div>
              <div>
                <label htmlFor="confirm_pwd">
                  Confirm Password{" "}
                  <span className={validMatch && matchPwd ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <span
                    className={validMatch || !matchPwd ? "hide" : "invalid"}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
              </div>
              <input
                id="confirm_pwd"
                type="password"
                onChange={(e) => setMatchPwd(e.target.value)}
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                required
              />
            </div>
            <p
              id="confirmnote"
              className={matchFocus && !validMatch ? "instructions" : "hide"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>
            <button
              disabled={
                !validName || !validPwd || !validMatch || !validEmail
                  ? true
                  : false
              }
            >
              Register
            </button>
            <div>
              <p>
                Already have an account?{" "}
                <span onClick={login} >
                  Login
                </span>
              </p>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Register;
