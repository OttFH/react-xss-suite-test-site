export default function () {
    const params = new URLSearchParams(window.location.search);

    return (
        <>
            <h1>Simple Tag</h1>
            <div>
                <h2>Description</h2>
                <div>
                    This page puts the value of the query parameter ("xss") into a div tag.
                    <div className="vulnerability-info-container">
                        <label>Has XSS vulnerability:</label>
                        <div>Yes</div>
                        <button onClick={()=>{
                            window.location = '/simpleTag?xss=<img src=/xss-meme.jpg onload=alert(1) />';
                        }}>
                            Example
                        </button>
                    </div>
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