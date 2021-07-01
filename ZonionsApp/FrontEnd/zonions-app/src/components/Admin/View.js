import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Axios from "axios";
import { ViewAgenda } from "@material-ui/icons";
import { useHistory } from "react-router";

const View = () => {
  const [data, setData] = useState([]);

  let history = useHistory();
  const { id } = useParams();

  const GetRestaurant = async () => {
    try {
      const result = await Axios({
        method: "GET",
        withCredentials: true,
        url: `http://localhost:3000/restaurants/${id}`,
      });
      console.log("iiii", result.data);
      setData(result.data);
      //    setData(...rest   aurantData,[result.data])
      //history.push("/Home")
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    GetRestaurant();
  }, []);

  return (
    <div class="view">
      <nav
        className="navbar navbar-expand-md navbar-light bg-secondary stickey-top"
        style={{ backgroundColor: "#dfe6e9" }}
      >
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse "
            id="navbar-Responsive"
          ></div>
          <ul className="navbar-nav ml-auto">
            {localStorage.getItem("user") ? (
              <li className="nav-item navAddEdit" style={{ fontSize: "" }}>
                {" "}
                <button
                  className="nav-link"
                  class="btn btn-secondary"
                  onClick={() => history.push("/DataTableAdmin")}
                >
                  HomePage{" "}
                </button>
              </li>
            ) : (
              <li className="nav-item navAddEdit" style={{ fontSize: "" }}>
                {" "}
                <button
                  className="nav-link"
                  class="btn btn-secondary"
                  onClick={() => history.push("/DataTable")}
                >
                  HomePage{" "}
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>






      <div className="row d-flex justify-content-center text-center">
        <div className="col-md-8 text-center">







          
          <h1 className="display-4">Restaurant Details {data.id}</h1>
          <hr />

          <h2> {data.name}</h2>
          <hr />


          <h3>Menu </h3>
          <img src={data.menu}></img>
<hr></hr>
          <p> Address</p> <h3>{data.address}</h3>
          <hr />

          <p> Phone </p> <h3>{data.phone}</h3>
          <hr />

          <p> Opening </p> <h3>{data.openingtime}</h3>
          <hr />
          
          <p>Closing</p>  <h3>{data.closingtime}</h3>
          <hr />

          <br></br>
          <br></br>
          <Link className="btn btn-secondary btn-lg" to="/DataTable">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
