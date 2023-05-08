import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import app_config from "../../config";

const ManageBookings = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  console.log(currentUser);

  const [packageData, setpackageData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { apiUrl } = app_config;

  const fetchPackageData = async () => {
    setLoading(true);
    const res = await fetch(
      "http://localhost:5000/book/getbyuser/" + currentUser._id
    );
    setLoading(false);
    console.log(res.status);
    // console.log(currentUser._id)

    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setpackageData(data);
    }
  };

  useEffect(() => {
    fetchPackageData();
  }, []);

  const deletePackageData = async (id) => {
    console.log(id);
    const res = await fetch("http://localhost:5000/package/delete/" + id, {
      method: "DELETE",
    });
    console.log(res.status);
    if (res.status === 200) {
      fetchPackageData();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Data Deleted Successfully",
      });
    }
  };

  const displayDetails = () => {
    if (!loading && packageData) {
      return packageData.map((order) => (
        <Accordion className="mt-3 border border-success rounded-6">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              <div className="row w-100">
                <div className="col-8">
                  <p className="h3">{order.package.state}</p>
                </div>
                <div className="col-4">
                  <p className="h4">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <h3>Package Details</h3>
            <hr />
            <img src={apiUrl + "/" + order.package.image} alt="" />
            <p className="h5">{order.package.city}</p>
            {/* <p className="h5">Location : {order.space.location}</p> */}
            <p className="h6">₹{order.package.price}</p>
            <p className="h5">Duration : {order.package.duration}</p>
            {/* <p className="h5">Provider Email : {order.space.providerEmail}</p> */}
            <p className="h5">
              {/* Provider Contact : {order.space.providerContact} */}
            </p>
            {/* <p className="h5">
              Space Size :{" "}
              <span className="h1">{order.space.size} sq. ft.</span>
            </p> */}
            <p className="h5 float-end">
              Amount Paid : <span className="display-4">₹{order.amount}</span>
            </p>
          </AccordionDetails>
          <Button
            variant="contained"
            color="error"
            sx={{ marginLeft: "15px", marginBottom: "15px" }}
            // onClick={() => deleteorderData(space._id)}
          >
            Cancel Booking
          </Button>
        </Accordion>
      ));
    }
  };

  return <div className="container">{displayDetails()}</div>;
};

export default ManageBookings;
