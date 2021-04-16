import {useState} from 'react';
import {exampleKey} from '../constants';

export default function ToggleExamples() {
    const [enableExamples, setEnableExamples] = useState(localStorage.getItem(exampleKey) === 'true');

    return (
        <div className="example-info-container">
            <div>
                <button onClick={() => {
                    setEnableExamples(!enableExamples);
                    localStorage.setItem(exampleKey, (!enableExamples).toString());
                }}>
                    {enableExamples ? 'Disable examples' : 'Enable examples'}
                </button>
            </div>
            <p>
                <i>This disables and enables the example buttons on every page with a vulnerability.</i>
            </p>
        </div>
    );
}
