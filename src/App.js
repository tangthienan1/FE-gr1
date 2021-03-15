import './App.css';
import RouteWay from './config/Route'
import Base from './components/Base';

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
