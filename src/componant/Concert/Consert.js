import React, { useEffect, useState } from 'react';
import Band from '../Band/Band';
import Cart from '../Cart/Cart';
import './Consert.css'

const Consert = () => {
    const [concert, setConcert] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (bands) => {
        const newCart = [...cart, bands]
        setCart(newCart);
    }

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
                            band={band}
                            handleAddProduct={handleAddProduct}
                        >

                        </Band>)
                    }
                </div>
            </div>
            <div className="col-md-3 cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Consert;