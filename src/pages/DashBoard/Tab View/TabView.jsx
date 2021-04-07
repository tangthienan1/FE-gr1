import { useState } from 'react';
import './tabview.css';
import ActivityView from './ActivityView';
import ApprovedView from './ApprovedView';
import PendingView from './PenddingView';
import SubmitView from './SubmitView';

function Tabview() {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="container">

            <div className="bloc-tabs">
                <button className={toggleState === 1 ?
                    "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}>Approved</button>
                <button className={toggleState === 2 ?
                    "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}>Pending</button>
                <button className={toggleState === 3 ?
                    "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}>Activity</button>
                <button className={toggleState === 4 ?
                    "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(4)}>Submit</button>
            </div>

            <div className="content-tabs">
                <div className={toggleState === 1 ?
                    "content active-content" : "content"}>
                    <ActivityView/>

                </div>
                <div className={toggleState === 2 ?
                    "content active-content" : "content"}>
                    <ApprovedView/>
                </div>
                <div className={toggleState === 3 ?
                    "content active-content" : "content"}>
                    <PendingView/>
                </div>
                <div className={toggleState === 4 ?
                    "content active-content" : "content"}>
                    <SubmitView/>
                </div>
            </div>
        </div>
    )
}
export default Tabview;