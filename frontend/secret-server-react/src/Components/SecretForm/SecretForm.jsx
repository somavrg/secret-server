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
        <form className="SecretForm" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="secretText">Secret Text:</label>
                <input
                    value={secret?.secretText}
                    name="secretText"
                    id="secretText"
                />
            </div>
            <div>
                <label htmlFor="expireAfterViews">Times it can be viewed:</label>
                <input
                    value={secret?.expireAfterViews}
                    name="expireAfterViews"
                    id="expireAfterViews"
                />
            </div>
            <div>
                <label htmlFor="expireAfter">Minutes it can be viewed:</label>
                <input
                    value={secret?.expireAfter}
                    name="expireAfter"
                    id="expireAfter"
                />
            </div>
            <div className="buttons">
                <button type="submit">
                    Create New Secret
                </button>
                <button type="button" onClick={onCancel}>
                    Cancel
                </button>
            </div>
        </form>
    );

};

export default SecretForm;
