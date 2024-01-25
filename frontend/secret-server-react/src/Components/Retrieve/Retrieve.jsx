import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Retrieve = ({ onSearch, onCancel }) => {

    const [hash, setHash] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(hash);
    };


    return (
        <div className="container d-flex justify-content-center align-items-center">
            <Form onSubmit={handleSearch} className="d-inline-block p-3">
                <Form.Group controlId="formBasicSearch" className="m-3">
                    <Form.Label className="justify-content-center fs-3 mb-3 fw-bold">Search Secret</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Search..."
                        value={hash}
                        onChange={(event) => setHash(event.target.value)}
                        className="mb-3"
                    />
                </Form.Group>

                <div className="d-flex justify-content-center">
                    <Button variant="primary" type="submit" className="btn-sm me-2">
                        Search
                    </Button>
                    <Button variant="secondary" onClick={onCancel} className="btn-sm">
                        Cancel
                    </Button>
                </div>
            </Form>
        </div>
    );
};


export default Retrieve;
