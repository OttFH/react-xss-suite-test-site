import escape from 'escape-html';
import ExampleButton from '../components/ExampleButton';

export default function () {
    const params = new URLSearchParams(window.location.search);
    const location = String.fromCharCode(47, 101, 115, 99, 97, 112, 105, 110, 103, 79, 110, 108, 111, 97, 100,
        63, 120, 115, 115, 61, 97, 108, 101, 114, 116, 40, 49, 41);

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

                    <ExampleButton location={location}/>
                </div>
            </div>

            <div className="value-container" dangerouslySetInnerHTML={{
                __html: `<img src="/xss-meme.jpg" alt="Funny Meme" onLoad="${escape(params.get('xss'))}"/>`
            }}/>
        </>
    );
}
