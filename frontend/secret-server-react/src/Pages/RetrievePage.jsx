import React, { useState } from 'react'
import Retrive from '../Components/Retrieve'
import { useNavigate } from "react-router-dom";
import ErrorPage from './ErrorPage';


const retriveSecret = (hash) => {
    return fetch(`/api/secret/${hash}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    }).then((res) => res.json());
};


const RetrivePage = () => {
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (hash) => {
        retriveSecret(hash)
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
            <Retrive
                onSearch={handleSearch}
                onCancel={() => navigate("/home")}
            />
  );
};

export default RetrivePage;
