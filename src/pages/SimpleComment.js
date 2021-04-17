import ExampleButton from '../components/ExampleButton';

export default function () {
    const params = new URLSearchParams(window.location.search);

    return (
        <>
            <h1>Simple Comment</h1>
            <div>
                <h2>Description</h2>
                <div>
                    This page puts the value of the query parameter ("xss") into a HTML comment.
                    This is done with dangerouslySetInnerHTML and is not considered best practice.
                </div>
                <div className="vulnerability-info-container">
                    <label>Has XSS vulnerability:</label>
                    <div>Yes</div>

                    <ExampleButton location='/simpleComment?xss=--><img src=/xss-meme.jpg onload=alert(1) /><!--'/>
                </div>
            </div>

            <div className="value-container">
                <label>Comment:</label>
                <div dangerouslySetInnerHTML={{
                    __html: `<!-- ${params.get('xss')} -->`,
                }}/>
                Open source code of page to see it.
            </div>
        </>
    );
}
