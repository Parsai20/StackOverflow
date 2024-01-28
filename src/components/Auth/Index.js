// import {
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     signInWithPopup,
//   } from "firebase/auth";
import React, { useState } from "react";
//   import { useHistory } from "react-router-dom";
//   import { auth, provider } from "../../firebase";
import "./Index.css";

function Index() {
  // const history = useHistory();
  const [register, setRegister] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [username, setUsername] = useState("");
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  // function validateEmail(email) {
  //   const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
  //   if (reg.test(email) === false) {
  //     return false;
  //   } else return true;
  // }

  // const handleGoogleSignIN = () => {
  //   setLoading(true);
  //   signInWithPopup(auth, provider)
  //     .then((res) => {
  //       setLoading(false);
  //       // console.log(res);
  //       history.push("/");
  //       // return (
  //       //   <>

  //       //   </>
  //       // );
  //     })
  //     .catch((error) => {
  //       setLoading(false);
  //       console.log(error);
  //     });
  // };

  // const handleSignIn = () => {
  //   setError();
  //   setLoading(true);
  //   if (email === "" || password === "") {
  //     setError("Required field is missing");
  //     setLoading(false);
  //   } else if (!validateEmail(email)) {
  //     setError("Email is malformed");
  //     setLoading(false);
  //   } else {
  //     signInWithEmailAndPassword(auth, email, password)
  //       .then((res) => {
  //         // console.log(res);
  //         history.push("/");
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.log(error.code);
  //         setError(error.message);
  //         setLoading(false);
  //       });
  //   }
  // };

  // const handleRegister = () => {
  //   setError("");
  //   setLoading(false);
  //   if (email === "" || password === "" || username === "") {
  //     setError("Required field is missing.");
  //     setLoading(false);
  //   } else if (!validateEmail(email)) {
  //     setError("Email is malformed");
  //     setLoading(false);
  //   } else {
  //     createUserWithEmailAndPassword(auth, email, password)
  //       .then((res) => {
  //         // console.log(res);
  //         history.push("/");
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setError(error.message);
  //         setLoading(false);
  //       });
  //   }
  // };
  return (


    <div className="auth">
      <div className="auth-container">
        <p>Add another way to log in using any of the following services. </p>
        <div className="sign-options">
          <div className="single-option">
            <img
              alt="google"
              src="https://www.techjunkie.com/wp-content/uploads/2020/11/How-to-Change-the-Google-Logo-1280x720.jpg"
            />
            <p>Login with Github</p>
            {/* <p>{loading ? "Signing in..." : "Login with Google"}</p> */}
          </div>
          <div className="single-option">
            <img
              alt="github"
              src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
            />
            <p>Login with Github</p>
          </div>
          <div className="single-option">
            <img
              alt="facebook"
              src="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049579.jpg?w=740&t=st=1706366093~exp=1706366693~hmac=84825838fe7ea621776af0c0520edd574c9f8c17f6ef405eb79656e3379835e4"
            />
            <p>Login with Facebook</p>
          </div>
        </div>
        <div className="auth-login">
          <div className="auth-login-container">


            {register ? (
              <>
                {" "}
                <div className="input-field">
                  <p>Username</p>
                  <input
                    //   value={username}
                    //   onChange={(e) => setUsername(e.target.value)}
                    type="text"
                  />
                </div>
                <div className="input-field">
                  <p>Email</p>
                  <input
                    //   value={email}
                    //   onChange={(e) => setEmail(e.target.value)}
                    type="text"
                  />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input
                    //   value={password}
                    //   onChange={(e) => setPassword(e.target.value)}
                    type="password"
                  />
                </div>
                {<button
                  // onClick={handleRegister}
                  // disabled={loading}
                  style={{
                    marginTop: "10px",
                  }}
                >
                  {/* {loading ? "Registering..." : "Register"} */}
                </button>}
              </>
            ) : (
              <>
                <div className="input-field">
                  <p>Email</p>
                  <input type="text" />
                </div>
                <div className="input-field">
                  <p>Password</p>
                  <input type="password" />
                </div>
                <button
                  // onClick={handleSignIn}
                  // disabled={loading}
                  style={{
                    marginTop: "10px",
                  }}
                >login
                  {/* {loading ? "Logging in..." : "Login"} */}
                </button>
              </>
            )}


            <p
                // onClick={() => setRegister(!register)}
                style={{
                  marginTop: "10px",
                  textAlign: "center",
                  color: "#0095ff",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                {register ? "Login" : "Register"} ?
              </p>
          </div>
        </div>
        {/* {error !== "" && ( */}
        <p
          style={{
            color: "red",
            fontSize: "14px",
          }}
        >gggggg
          {/* {error} */}
        </p>
        {/* )} */}
      </div>
    </div>
  );
}

export default Index;



