import {postDataKey} from '../constants';
import {Link} from 'react-router-dom';

export default function () {
    const data = localStorage.getItem(postDataKey) || '';

    return (
        <>
            <h1>Read Data</h1>
            <div>
                <h2>Description</h2>
                <div>
                    This page displays the value of the data that is saved in the localStorage, which was posted on {' '}
                    <Link to="/postData">this page</Link>, in a div tag.
                </div>
            </div>

            <div className="value-container">
                <label>Value:</label>
                <div dangerouslySetInnerHTML={{__html: data}}/>
            </div>
        </>
    );
}
