
import './App.css';
import Counter from './Components/Counter';
import Greeding from './Components/Greeding';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      
      <Counter/>
      
     
     <Message/>
     <Greeding name="Chameli" num='1'>
        <p>This is children props</p>
      </Greeding>
      <Greeding name="Pubudu" num='2'>
        <button>Action</button>
      </Greeding>
      <Greeding name="Ashini" num='3'/>


      <Welcome name="Menike" num='10'></Welcome>
      <Welcome name="Kumarihami" num='20'></Welcome>
      <Welcome name="Gunasekara" num='30'></Welcome>
  <Hello/>
    </div>
  );
}

export default App;
