import ExampleButton from '../components/ExampleButton';

export default function () {
    const params = new URLSearchParams(window.location.search);
    const location = String.fromCharCode(47, 101, 115, 99, 97, 112, 105, 110, 103, 72, 114, 101, 102, 63, 120,
        115, 115, 61, 106, 97, 118, 97, 115, 99, 114, 105, 112, 116, 58, 97, 108, 101, 114, 116, 40, 49, 41);

    return (
        <>
            <h1>Escape Href</h1>
            <div>
                <h2>Description</h2>
                <div>
                    This page puts the escaped value of the query parameter ("xss") into a div tag.
                    It gets escaped by react.
                </div>
                <div className="vulnerability-info-container">
                    <label>Has XSS vulnerability:</label>
                    <div>Yes</div>

                    <ExampleButton location={location}/>
                </div>
            </div>

            <div className="value-container">
                <label>Click here:</label>
                <br/>
                <a href={params.get('xss')}>
                    Link
                </a>
            </div>
        </>
    );
}
