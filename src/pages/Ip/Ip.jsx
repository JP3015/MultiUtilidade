import React, { useState } from "react";
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Ip.css'

export default function Ip(){
    const [details, setDetails] = useState(null);

    const getUserGeolocationDetails = () => {
        fetch(
            "https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572"
        )
            .then(response => response.json())
            .then(data => setDetails(data));
    };

    return (
        <>
            <Header />
            <body>
                <div className="center-screen">
                    <h2 className="ip-title">Achar endereço de Ip</h2>
                    <p>
                        <button
                            className="btn-primary"
                            onClick={getUserGeolocationDetails}>
                            Clique aqui
                        </button>
                        <div className="ip-location">
                            <div>
                                {details && (
                                    <ul>
                                        <li>
                                            Localização :{" "}
                                            {`${details.city}, ${details.country_name}(${details.country_code})`}
                                        </li>
                                        <li>
                                            IP: {details.IPv4}
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </div>
                    </p>
                </div>
            </body>
            <Footer />
        </>
    )
}