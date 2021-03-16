import logo from './logo.svg';
import './App.css';
import RouteWay from './config/route'
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
