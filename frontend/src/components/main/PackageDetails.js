import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PackageDetails = () => {

    const { packageid } = useParams()
    const [Package, setPackage] = useState([])

    const moreDetails = async () => {

        console.log(packageid);

        const res = await fetch('http://localhost:5000/package/getbyid/' + packageid)
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json()
            setPackage(data)
            console.log(data);
        }
    }

    useEffect(() => {
        moreDetails();
    }, [])




    const displayDetails = () => {
        return (
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">{Package.state}</h2>

                    <div className="row">
                        <div className='col-md-8'>
                            <p className="card-text">
                                {Package.city}
                            </p>
                            <p className="card-text">
                                <b>Price : </b>₹{Package.price} 
                            </p>
                            <p className="card-text">
                                <b>Duration :</b> {Package.duration}
                            </p>
                            <p className="card-text">
                                <b>Description :</b> {Package.description}
                            </p>
                        </div>

                        <div className="col-md-4">
                            <img src={'http://localhost:5000/' + Package.image} alt=""
                                className='w-100 rounded-5' />
                        </div>
                    </div>

                    {/* <button type="button" className="btn btn-primary">
                Button
              </button> */}
                </div>
            </div>
        )
    }



    return (
        <div className='container'>
            {displayDetails()}
        </div>
    )
}

export default PackageDetails