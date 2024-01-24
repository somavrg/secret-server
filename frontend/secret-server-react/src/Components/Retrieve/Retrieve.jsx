import { useState } from "react";

const Retrive = ({ onSearch, onCancel }) => {

    const [hash, setHash] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(hash);
    };

    
    return (
        <form onSubmit={handleSearch}>
            <input type="text"
                placeholder="Search..."
                value={hash}
                onChange={(e) => setHash(e.target.value)}
            />
            <div className="buttons">
                <button type="submit">
                    Search
                </button>
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );
};


export default Retrive;
