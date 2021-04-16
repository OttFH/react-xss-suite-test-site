import {useRef} from 'react';
import {postDataKey} from '../constants';
import {Link} from "react-router-dom";

export default function () {
    const xssInputRef = useRef();

    return (
        <>
            <h1>Post Data</h1>
            <div>
                <h2>Description</h2>
                <div>
                    This page writes the value into localStorage and displays it on {' '}
                    <Link to="/readData">this page</Link>.
                </div>
            </div>

            <div className="value-container">
                <label>
                    Value:
                    <br/>
                    <input ref={xssInputRef} name="xss"/>
                </label>
                <br/>
                <button onClick={() => localStorage.setItem(postDataKey, xssInputRef.current.value)}>Post</button>
            </div>
        </>
    );
}
