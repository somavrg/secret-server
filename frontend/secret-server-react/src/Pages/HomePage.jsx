import {useNavigate} from "react-router-dom";


const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="buttons">
            <button onClick={() => navigate("/create")}>
                Add new Secret
            </button>
            <button onClick={() => navigate("/retrive")}>
                Search a Secret
            </button>
        </div>
    )
}

export default HomePage;
