import React from 'react';
import './Develepor.css'
const Developer = props => {
    // console.log(props);
    const {image, name, gender} = props.developer;

    return (
        
        <div className="col">
            <div className="card h-100 border border-secondary rounded-3 card-bg-color">
                <img className= "rounded-circle mx-auto m-3 img-fluid w-25" src={image}alt="..."/>
                <div className="card-body text-center">
                    <h3 className="card-title">{name}</h3>
                    <p>Gender: {gender}</p>
                    <button onClick= {() => props.handleDetails(props.developer)} type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Details
                </button>       
                </div>
            </div>
        </div>
    );
};

export default Developer;

// Modal btn
/* 

*/