import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const BrowsePackage = () => {

    const [allPackage, setAllPackage] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchAllPackageData = async () => {
        setLoading(true);
        const res = await fetch("http://localhost:5000/package/getall");
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setAllPackage(data);
            setLoading(false);
        }
    };







    useEffect(() => {
        fetchAllPackageData();
    }, []);


    const displayPackageData = () => {
        if (!loading) {
            return (

                <div>
                    {allPackage.map((pack, index) => (

                        <div className="row justify-content-center mb-3" key={pack._id}>
                            <div className="col-md-12 col-xl-12">
                                <div className="card shadow-0 border rounded-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-6 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                                <div className="bg-image hover-zoom ripple rounded ripple-surface">
                                                    <img
                                                        // src={pack.image ? pack.image : "/images/space-placeholder.jpg"}
                                                        src={'http://localhost:5000/' + pack.image}
                                                        className="w-100"
                                                        alt=""
                                                    />
                                                    <a href="#!">
                                                        <div className="hover-overlay">
                                                            <div
                                                                className="mask"
                                                                style={{
                                                                    backgroundColor: "rgba(253, 253, 253, 0.15)",
                                                                }}
                                                            />
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-lg-6 col-xl-6">
                                                <h5>{pack.state}</h5>

                                                <div className="mt-1 mb-0 text-muted small">
                                                    <span className="text-primary"></span>
                                                    <span>{pack.city}</span>

                                                </div>


                                                <p className="text-truncate mb-4 mb-md-0">
                                                    {pack.duration}
                                                </p>
                                                <p className="text-truncate mb-4 mb-md-0">
                                                    {pack.description}
                                                </p>
                                                {/* </div>

                    <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start"> */}
                                                <div className="d-flex flex-row align-items-center mb-1">
                                                    <h4 className="mb-1 me-1">₹{pack.price}</h4>
                                                </div>
                                                <div className="d-flex flex-column mt-4">
                                                    <Link to={`/user/book/${pack._id}`} className="btn btn-success btn-sm" type="button">
                                                        Book Now
                                                    </Link>
                                                    <Link to={`/main/packageDetails/${pack._id}`}
                                                        className="btn btn-outline-success btn-sm mt-2"
                                                        type="button"
                                                    >
                                                        More Details
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

            );
        } else {
            return <div>Loading...</div>;
        }
    };







    return (
        <div className='container' style={{marginTop:'80px'}}>
            {displayPackageData()}
        </div>
    )
}

export default BrowsePackage