import React from 'react';

const Details = props => {
    console.log(props.details)
    const  {name, image, company, salary, email, phone} = props.details;
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"><span className= "text-info">Developer</span> {name}</h5>
                    </div>
                    <div class="modal-body">
                        <img className= "rounded mx-auto m-3 img-fluid w-25" src={image}alt="..."/>
                        <h4>Company: {company}</h4>
                        <h4>Salary: ${salary}</h4>
                        <p>Email: {email}</p>
                        <p>Phone no: {phone}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;


// Modeal
/* 

*/