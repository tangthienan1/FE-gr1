import React from "react";
import ManagerButtonDropdown from './ManagerButtonDropdown';
import LineChart from "./ManagerLineChart";
import PieChart from "./ManagerPieChart";

function Statistic() {

    return (
      <div className='statistic-tab'>
        <div className='statistic-chart-pie'>
          <ManagerButtonDropdown />
          <PieChart/>
        </div>
        
        <div className='statistic-chart-line'>
          
          <LineChart/>
        </div>
      </div>
    );
  }


export default Statistic;