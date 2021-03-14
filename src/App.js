import './App.css';
import Base from './components/Base';
import RouteWay from './config/Route.js'

function App() {
  return (
    <div className="App">
      <RouteWay>
        <Base />
      </RouteWay>
    </div>
  );
}

export default App;
