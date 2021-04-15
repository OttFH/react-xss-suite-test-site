export default function Home() {
    return (
        <>
            <h1>React XSS Test Site</h1>

            <div>
                <h2>Description</h2>
                <div>
                    This website is build with react and contains different types of common XSS vulnerabilities.
                    The purpose is to use this site to test xss detection suites, to compare them.
                    Not all pages have vulnerabilities, to test sensitivity and specificity.
                </div>
            </div>

            <div className="pages-list-container">
                <h3>Pages</h3>

                <div className="pages-list-group">
                    <label>Simple</label>
                    <div>
                        <a href="/simpleTag?xss=234">Tag</a>
                    </div>
                    <div>
                        <a href="/simpleValue?xss=234">Value</a>
                    </div>
                    <div>
                        <a href="/simpleComment?xss=234">Comment</a>
                    </div>
                </div>

                <div className="pages-list-group">
                    <label>Escaping</label>
                    <div>
                        <a href="/escapingTag?xss=234">Tag</a>
                    </div>
                    <div>
                        <a href="/escapingValue?xss=234">Value</a>
                    </div>
                    <div>
                        <a href="/escapingComment?xss=234">Comment</a>
                    </div>
                    <div>
                        <a href="/escapingOnload?xss=234">Event Handler</a>
                    </div>
                </div>
            </div>
        </>
    );
}