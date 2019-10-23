import React, { useState, useEffect } from "react";
import axios from "axios";


const SignUp = props => {
  const [user, setUser] = useState({
    username: "",
    password: ""
    // loading: false
  });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post(
        "https://nannytracker2.herokuapp.com/auth/register ",
        user
      )
      .then(response => {
        // localStorage.setUser("token", response.data.password);
        props.history.push("/");
        // setUser({ loading: false });
        console.log("AUTH RES", response);
      })
      .catch(error => {
        console.log(error.response);
        setUser({
          username: "",
          password: ""
        });
      });
  };

  return (
    <>
      <div className="Above-signup">
        {/* <img src={logo}></img> */}
        {/* <button>Sign In</button> */}
      </div>
      <div className="Above-signup-button">
        <button onClick={() => props.history.push("/")}>Sign In Page</button>
      </div>
      <div className="Signup">
        {/* <img src={joinUs}></img> */}
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <label>Name</label>
              <input
                type="text"
                name="username"
                value={user.username}
                placeholder="enter username"
                onChange={handleChange}
              />
            </li>
            <li>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                placeholder="choose password"
                onChange={handleChange}
              />
            </li>
            <button>Submit</button>
            <h1></h1>
            <h6 onClick={() => props.history.push("/")}>
              Already have an account? Sign In
            </h6>
          </ul>
        </form>
      </div>
    </>
  );
  // } else {
  //   return (
  //     <h3>
  //       <Loader type="Plane" color="#E57458" height="100" width="100" />
  //     </h3>
  //   );
  // }
};

export default SignUp;