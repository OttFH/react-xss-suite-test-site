import ToggleExamples from "../components/ToggleExamples";
import {Link} from "react-router-dom";

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

            <ToggleExamples/>

            <div className="pages-list-container">
                <h3>Pages</h3>

                <div className="pages-list-group">
                    <label>Simple</label>
                    <div>
                        <Link to="/simpleTag?xss=234">Tag</Link>
                    </div>
                    <div>
                        <Link to="/simpleValue?xss=234">Value</Link>
                    </div>
                    <div>
                        <Link to="/simpleComment?xss=234">Comment</Link>
                    </div>
                </div>

                <div className="pages-list-group">
                    <label>Escaping</label>
                    <div>
                        <Link to="/escapingTag?xss=234">Tag</Link>
                    </div>
                    <div>
                        <Link to="/escapingValue?xss=234">Value</Link>
                    </div>
                    <div>
                        <Link to="/escapingComment?xss=234">Comment</Link>
                    </div>
                    <div>
                        <Link to="/escapingHref?xss=234">Href</Link>
                    </div>
                    <div>
                        <Link to="/escapingOnload?xss=234">Event Handler</Link>
                    </div>
                </div>

                <div className="pages-list-group">
                    <label>Stored</label>
                    <div>
                        <Link to="/postData?xss=234">Post</Link>
                    </div>
                    <div>
                        <Link to="/readData?xss=234">Read</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
