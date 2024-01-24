import SecretForm from "../Components/SecretForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ErrorPage from "./ErrorPage";


const createSecret = (secret) => {
    return fetch("/api/secret", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(secret)
    }).then((res) => res.json());
}

const SaveSecret = () => {

    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleCreateSecret = (secret) => {
        createSecret(secret)
            .then((value) => {
                console.log(value);
                navigate("/home");
                setError(false);
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
            <SecretForm
                onSave={handleCreateSecret}
                onCancel={() => navigate("/home")}
            />
    );
};

export default SaveSecret;
