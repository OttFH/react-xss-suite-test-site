import ExampleButton from '../components/ExampleButton';

export default function () {
    const params = new URLSearchParams(window.location.search);
    const location = String.fromCharCode(47, 115, 105, 109, 112, 108, 101, 86, 97, 108, 117, 101, 63, 120, 115,
        115, 61, 34, 62, 60, 98, 114, 62, 60, 105, 109, 103, 32, 115, 114, 99, 61, 47, 120, 115, 115, 45, 109, 101,
        109, 101, 46, 106, 112, 103, 32, 111, 110, 108, 111, 97, 100, 61, 97, 108, 101, 114, 116, 40, 49, 41, 32, 47,
        62, 60, 105, 110, 112, 117, 116, 32, 116, 121, 112, 101, 61, 34, 104, 105, 100, 100, 101, 110);

    return (
        <>
            <h1>Simple Value</h1>
            <div>
                <h2>Description</h2>
                <div>
                    This page puts the value of the query parameter ("xss") into the value attribute of a value tag.
                    This is done with dangerouslySetInnerHTML and is not considered best practice.
                </div>
                <div className="vulnerability-info-container">
                    <label>Has XSS vulnerability:</label>
                    <div>Yes</div>

                    <ExampleButton location={location}/>
                </div>
            </div>

            <div className="value-container">
                <label dangerouslySetInnerHTML={{
                    __html: `Value:
                    <input name="xss" value="${params.get('xss')}"/>`
                }}/>
            </div>
        </>
    );
}
