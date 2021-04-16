import escape from 'escape-html';
import ExampleButton from "../components/ExampleButton";

export default function () {
    const params = new URLSearchParams(window.location.search);

    return (
        <>
            <h1>Escape Tag</h1>
            <div>
                <h2>Description</h2>
                <div>
                    This page uses the escaped value of the query parameter ("xss") in the onload event handler of
                    an img tag. This is done with dangerouslySetInnerHTML and is not considered best practice.
                    To escape the value the npm package 'escape-html' is used.
                </div>
                <div className="vulnerability-info-container">
                    <label>Has XSS vulnerability:</label>
                    <div>Yes</div>

                    <ExampleButton location='/escapingOnload?xss=alert(1)'/>
                </div>
            </div>

            <div className="value-container" dangerouslySetInnerHTML={{
                __html: `<img src="/xss-meme.jpg" alt="Funny Meme" onLoad="${escape(params.get('xss'))}"/>`
            }}/>
        </>
    );
}
