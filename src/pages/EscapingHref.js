import ExampleButton from '../components/ExampleButton';

export default function () {
    const params = new URLSearchParams(window.location.search);

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

                    <ExampleButton location='/escapingHref?xss=javascript:alert(1)'/>
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
