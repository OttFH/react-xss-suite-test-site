export default function () {
    const params = new URLSearchParams(window.location.search);

    return (
        <>
            <h1>Escape Tag</h1>
            <div>
                <h2>Description</h2>
                <div>
                    This page puts the escaped value of the query parameter ("xss") into a div tag.
                    It gets escaped by react.
                </div>
                <div className="vulnerability-info-container">
                    <label>Has XSS vulnerability:</label>
                    <div>No</div>
                </div>
            </div>

            <div className="value-container">
                <label>Value:</label>
                <div>
                    {params.get('xss')}
                </div>
            </div>
        </>
    );
}
