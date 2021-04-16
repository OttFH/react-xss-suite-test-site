import escape from 'escape-html';

export default function () {
    const params = new URLSearchParams(window.location.search);

    return (
        <>
            <h1>Escape Comment</h1>
            <div>
                <h2>Description</h2>
                <div>
                    This page puts the escaped value of the query parameter ("xss") into a comment.
                    This is done with dangerouslySetInnerHTML and is not considered best practice.
                    To escape the value the npm package 'escape-html' is used.
                </div>
                <div className="vulnerability-info-container">
                    <label>Has XSS vulnerability:</label>
                    <div>No</div>
                </div>
            </div>

            <div className="value-container">
                <label>Comment:</label>
                <div dangerouslySetInnerHTML={{
                    __html: `<!-- ${escape(params.get('xss'))} -->`,
                }}/>
                Open source code of page to see it.
            </div>
        </>
    );
}
