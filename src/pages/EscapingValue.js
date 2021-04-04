export default function () {
    const params = new URLSearchParams(window.location.search);

    return (
        <>
            <h1>Escape Value</h1>
            <div>
                <h2>Description</h2>
                <div>
                    This page puts the value of the query parameter ("xss") into the value attribute of a value tag.
                    It gets escaped by react.
                </div>
                <div className="vulnerability-info-container">
                    <label>Has XSS vulnerability:</label>
                    <div>No</div>
                </div>
            </div>

            <div className="value-container">
                <label>
                    Value:
                    <input name="xss" defaultValue={params.get('xss')}/>
                </label>
            </div>
        </>
    );
}