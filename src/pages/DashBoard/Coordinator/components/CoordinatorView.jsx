import { useState } from 'react';
import Approved from '../../Approved';
import Pending from '../../Pending';
import StatisticTab from './Statistic';

function CoordinatorView() {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="container_a">

            <div className="bloc-tabs">
                <button className={toggleState === 1 ?
                    "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}>Approved</button>
                <button className={toggleState === 2 ?
                    "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}>Pending</button>
                <button className={toggleState === 3 ?
                    "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(3)}>Statistic</button>
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
                        <StatisticTab />
                </div>
            </div>
        </div>
    )
}
export default CoordinatorView;