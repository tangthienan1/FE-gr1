import React from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class PieChart extends React.Component {
  state = {
    dataPie: {
      labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
      datasets: [
        {
          data: [300, 50, 100, 40, 120],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
            "#AC64AD"
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774",
            "#DA92DB"
          ]
        }
      ]
    }
  }

  render() {
    return (
      <div className='pie-chart'>
      <MDBContainer className='pie-chart-1'>
        <div>
        <h3 className="mt-5">Pie chart 1</h3>
        <Pie className='pie-chart-1-data' data={this.state.dataPie} options={{ responsive: true }} />
        </div>
      </MDBContainer>
      <MDBContainer className='pie-chart-2'>
      <div>
      <h3 className="mt-5">Pie chart 2</h3>
      <Pie className='pie-chart-2-data' data={this.state.dataPie} options={{ responsive: true }} />
      </div>
    </MDBContainer>
    </div>
    );
  }
}

export default PieChart;

