
import './App.css';
import Greeding from './Components/Greeding';
import Hello from './Components/Hello';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <Greeding name="Chameli" num='1'/>
      <Greeding name="Pubudu" num='2'/>
      <Greeding name="Ashini" num='3'/>
      <Welcome/>
      <Hello/>
    </div>
  );
}

export default App;
