import React from 'react';
import './Band.css'

const Band = (props) => {
    // console.log(props.band);
    const { id, name, salary, members, img, genre } = props.band || {};
    return (
        <div className="col-md-4 g-4 band-container text-center">
            <div class="card h-100 card-style">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text"> <b>Salary: </b>${salary}
                        <br />
                        <b> Members:</b> {members}
                        <br />
                        <b>Genre:</b> {genre}
                        <br />
                        <b>ID:</b> {id}
                    </p>
                    <button onClick={() => props.handleAddProduct(props.band)} className="btn-regular"><i class="fas fa-shopping-cart"></i> Pick your Band</button>
                </div>
            </div>
        </div >
    );
};

export default Band;