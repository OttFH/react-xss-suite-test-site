import ExampleButton from '../components/ExampleButton';

export default function () {
    const params = new URLSearchParams(window.location.search);
    const location = String.fromCharCode(47, 115, 105, 109, 112, 108, 101, 84, 97, 103, 63, 120, 115, 115, 61,
        60, 105, 109, 103, 32, 115, 114, 99, 61, 47, 120, 115, 115, 45, 109, 101, 109, 101, 46, 106, 112, 103, 32,
        111, 110, 108, 111, 97, 100, 61, 97, 108, 101, 114, 116, 40, 49, 41, 32, 47, 62);

    return (
        <>
            <h1>Simple Tag</h1>
            <div>
                <h2>Description</h2>
                <div>
                    This page puts the value of the query parameter ("xss") into a div tag.
                    This is done with dangerouslySetInnerHTML and is not considered best practice.
                </div>
                <div className="vulnerability-info-container">
                    <label>Has XSS vulnerability:</label>
                    <div>Yes</div>

                    <ExampleButton location={location}/>
                </div>
            </div>

            <div className="value-container">
                <label>Value:</label>
                <div dangerouslySetInnerHTML={{
                    __html: params.get('xss'),
                }}/>
            </div>
        </>
    );
}
