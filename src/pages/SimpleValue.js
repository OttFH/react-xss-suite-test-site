import ExampleButton from "../components/ExampleButton";

export default function () {
    const params = new URLSearchParams(window.location.search);

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

                    <ExampleButton
                        location='/simpleValue?xss="><br><img src=/xss-meme.jpg onload=alert(1) /><input type="hidden'/>
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
