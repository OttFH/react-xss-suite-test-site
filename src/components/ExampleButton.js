import {useState} from 'react';
import {exampleKey} from '../constants';

export default function ExampleButton({location, onClick}) {
    const [enableExamples] = useState(localStorage.getItem(exampleKey) === 'true');
    const onClickCallback = onClick || (() => window.location = location);

    return enableExamples && (
        <button onClick={onClickCallback}>
            Example
        </button>
    );
}
