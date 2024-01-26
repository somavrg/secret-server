import React, { useState } from 'react'
import Retrieve from '../Components/Retrieve'
import { useNavigate } from "react-router-dom";
import ErrorPage from './ErrorPage';


const retrieveSecret = (hash) => {
    return fetch(`/api/secret/${hash}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }).then((res) => res.json());
};


const RetrievePage = () => {
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (hash) => {
        retrieveSecret(hash)
            .then((value) => {
                console.log(value);
                navigate("/home");
                setError(false)
            })
            .catch((err) => {
                console.error(err);
                setError(true);
            })
    };


    return (
        error ?
            <ErrorPage />
        :
            <Retrieve
                onSearch={handleSearch}
                onCancel={() => navigate("/")}
            />
  );
};

export default RetrievePage;
