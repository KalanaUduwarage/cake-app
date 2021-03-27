import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const history = useHistory();

  const validateAdmin = (uname, password) => {
    console.log(uname, password);
    if (uname && password === "Admin") {
      history.push("/Admin");
    } else {
      alert("Please Try Again or Register");
    }
  };
  const auth = async (email, password) => {
    const formData = new FormData();
    console.log(email);
    console.log(password);
    formData.append("email", email);
    formData.append("password", password);
    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    await axios
      .post(
        "https://guarded-citadel-11580.herokuapp.com/user/auth",
        formData,
        config
      )
      .then((response) => {
        if (response.data.authentication) {
          if (response.data.accessLevel === 1) history.push("./Admin");
          if (response.data.accessLevel === 2) history.push("./Home");
        } else {
          alert("Incorrect email or password");
        }
      })
      .catch((err) => {
        alert("Incorrect email or password");
      });
  };
  return (
    <div className="signup">
      <form className="form-signin">
        <h2 className="form-signin-heading"> Please sign in </h2>
        <br />
        <div
          className="sign"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
            marginLeft: "200px",
            marginRight: "200px",
            borderBlockWidth: "5px",
            padding: "10px",
          }}
        >
          <label
            for="inputEmail"
            className="sr-only"
            style={{
              color: "white",
            }}
          >
            {" "}
            Email address{" "}
          </label>
          <br/>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            autofocus
          />
          <br />
          <br />
          <label
            for="inputPassword"
            className="sr-only"
            style={{ color: "white" }}
          >
            {" "}
            Password{" "}
          </label>
          <br />
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
          />
          <br />
        </div>
        <br />
        <button
          className="btn btn-lg btn-primary btn-block"
          type="button"
          onClick={() =>
            auth(
              document.getElementById("inputEmail").value,
              document.getElementById("inputPassword").value
            )
          }
        >
          Login
        </button>
        <br />
        <br />
        <Link to="/RegisterForum" className="btn btn-lg">
          {" "}
          Sign in
        </Link>
      </form>
    </div>
  );
};

export default Signup;
