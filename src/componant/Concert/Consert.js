import React, { useEffect, useState } from 'react';
import Band from '../Band/Band';
import './Consert.css'

const Consert = () => {
    const [concert, setConcert] = useState([]);

    useEffect(() => {
        fetch('./concert.JSON')
            .then(res => res.json())
            .then(data => setConcert(data));
    }, [])
    return (
        <div className="row mt-4 ms-4">
            <div className="col-md-9">
                <div className="row band-container">
                    {
                        concert.map(band => <Band
                            key={band.id}
                            band={band}></Band>)
                    }
                </div>
            </div>
            <div className="col-md-3 cart-container">
                <h4>Cart</h4>
            </div>
        </div>
    );
};

export default Consert;