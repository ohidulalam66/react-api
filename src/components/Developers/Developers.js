import React, { useEffect, useState } from 'react';
import './Developers.css'
import Developer from '../Developer/Developer';
import Details from '../Details/Details';

const Developers = () => {
    const [developers, setDevelopers] = useState([]);
    const [details, setDetails] = useState([]);

    useEffect(() => { 
        fetch("./fakedb.json")
        .then(res => res.json())
        .then(data => setDevelopers(data))
    } , [])
    const handleDetails = (developer) => {
        setDetails(developer);
    }
    return (
        <div className= "container mt-5">
            <h2 className= "text-white">Developers</h2>
            <div className="row row-cols-1 row-cols-md-3 mb-4 g-4 text-white">
            {
            developers.map(developer => 
            <Developer
            key= {developer._id}
            developer= {developer}
            handleDetails= {handleDetails}
            ></Developer>)
            }
            </div>
            <div>
                <Details details= {details}></Details>
            </div>
        </div>
    );
};

export default Developers;