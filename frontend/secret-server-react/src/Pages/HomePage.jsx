import {useNavigate} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="container d-flex justify-content-center align-items-center p-3 m-5">
            <Button onClick={() => navigate("/create")} className="btn-lg me-4 btn-outline-primary btn-light">
                Add new Secret
            </Button>
            <Button onClick={() => navigate("/retrieve")} className="btn-lg btn-outline-primary btn-light">
                Search a Secret
            </Button>
        </div>
    )
}

export default HomePage;
