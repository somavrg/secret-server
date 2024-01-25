import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormLabel} from "react-bootstrap";


const SecretForm = ({secret, onSave, onCancel}) => {


    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const entries = [...formData.entries()];

        let secret = entries.reduce((acc, entry) => {
            const [k, v] = entry;
            acc[k] = v;
            return acc;
        }, {});

        return onSave(secret);
    }


    return (
        <div className="container d-flex justify-content-center align-items-center">
            <Form onSubmit={handleSubmit} className="d-inline-block p-3">
                <FormLabel className="justify-content-center fs-3 mb-3 fw-bold m-3">Add New Secret</FormLabel>
                <Form.Group>
                    <Form.Label>Secret Text:</Form.Label>
                    <Form.Control
                        type="text"
                        value={secret?.secretText}
                        name="secretText"
                        id="secretText"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Times it can be viewed:</Form.Label>
                    <Form.Control
                        type="text"
                        value={secret?.expireAfterViews}
                        name="expireAfterViews"
                        id="expireAfterViews"
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Minutes it can be viewed:</Form.Label>
                    <Form.Control
                        type="text"
                        value={secret?.expireAfter}
                        name="expireAfter"
                        id="expireAfter"
                        className="mb-3"
                    />
                </Form.Group>

                <div className="buttons">
                    <Button variant="primary" type="submit" className="btn-sm me-2">
                        Create New Secret
                    </Button>
                    <Button variant="secondary" onClick={onCancel} className="btn-sm">
                        Cancel
                    </Button>
                </div>
            </Form>
        </div>
    );

};

export default SecretForm;
