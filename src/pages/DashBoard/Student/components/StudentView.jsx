import { useState } from 'react';
import Activity from './Activity';
import Pending from '../../Pending';
import Submit from './Submit';
import './tabview.css';
import Approved from '../../Approved';

function StudentView() {

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
                        <Approved />
                </div>
                <div className={toggleState === 2 ?
                    "content active-content" : "content"}>
                        <Pending />
                </div>
                <div className={toggleState === 3 ?
                    "content active-content" : "content"}>
                    <Activity />
                </div>
                <div className={toggleState === 4 ?
                    "content active-content" : "content"}>
                    <Submit />
                </div>
            </div>
        </div>
    )
}
export default StudentView;