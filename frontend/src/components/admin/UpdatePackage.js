import { MDBInput, MDBTextArea } from 'mdb-react-ui-kit';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { Formik } from 'formik'
import Swal from 'sweetalert2';

const UpdatePackage = () => {
  const url = 'http://localhost:5000';

  const { id } = useParams();
  console.log(id)
  const [pack, setPack] = useState([])
  const [imageData, setImageData] = useState(null)

  const getAllPackage = async () => {
    const res = await fetch('http://localhost:5000/package/getall');
    console.log(res.status);

    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      setPack(data);
    }
  }

  const updataData = async (formdata) => {
    console.log(formdata)
    const res = await fetch('http://localhost:5000/package/update/' + id, {
      method: 'PUT',
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    })

    console.log(res.status);
    if (res.status === 200) {
      Swal.fire({
        title: 'Success',
        icon: 'success',
        text: 'Package Updated Successfully'
      })
    }
  }













  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        // console.log(file.name);
        // console.log(file);
        setImageData(file.name);
      }
    });
  };

  useEffect(() => {
    getAllPackage();
  }, []);









  const showUpdateForm = () => {
    <section className="h-100 h-custom" style={{ backgroundColor: "#8fc4b7" }}>
      <div className="py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <img
                src="https://images5.alphacoders.com/887/887518.jpg"
                className="w-100"
                style={{
                  borderTopLeftRadius: ".3rem",
                  borderTopRightRadius: ".3rem"
                }}
                alt="Sample photo"
              />
              <div className="card-body p-4 p-md-3">

                <h3 className="mb-4 pb-2 pb-md-0  px-md-2">
                  Package Info
                </h3>

                <Formik
                  initialValues={{
                    state: '',
                    city: '',
                    price: '',
                    duration: '',
                    description: '',
                    image: ''
                  }}
                  onSubmit={updataData}
                >
                  {({ values, handleSubmit, handleChange }) => (
                    <form className="px-md-2" onSubmit={handleSubmit}>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <MDBInput label='State' id='state' type='text' onChange={handleChange} value={values.state} />
                        </div>
                        <div className="col-md-6 mb-4">
                          <MDBInput label='City' id='city' type='text' onChange={handleChange} value={values.city} />
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <MDBInput label='Price' id='price' type='number' onChange={handleChange} value={values.price} />
                        </div>
                        <div className="col-md-6 mb-4">
                          <MDBInput label='Duration' id='duration' type='text' onChange={handleChange} value={values.duration} />
                        </div>
                      </div>

                      <div className="mb-4">
                        <MDBTextArea label='Description' id='description' rows={4} onChange={handleChange} value={values.description} />
                      </div>



                      <div className='my-4'>
                        <label className="form-label" htmlFor="customFile">
                          Upload Image
                        </label>
                        <input type="file" className="form-control" id="image" onChange={uploadFile} />
                      </div>




                      <button type="submit" className="btn btn-success btn-lg mb-1 w-100">
                        Submit
                      </button>
                    </form>
                  )}


                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  }







  return (
    <div className='container'>
      {showUpdateForm()}
    </div>
  )
}

export default UpdatePackage