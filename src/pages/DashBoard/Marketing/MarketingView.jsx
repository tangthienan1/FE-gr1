import { useState } from 'react';
import MarketingStatistic from './MarketingStatistic';
import '../Student/components/tabview.css';
import Approved from '../Approved';

function MarketingView() {

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
                    onClick={() => toggleTab(2)}>Statistic</button>
            </div>

            <div className="content-tabs">
                <div className={toggleState === 1 ?
                    "content active-content" : "content"}>
                        <Approved />
                </div>
                <div className={toggleState === 2 ?
                    "content active-content" : "content"}>
                        <MarketingStatistic />
                </div>
            </div>
        </div>
    )
}
export default MarketingView;