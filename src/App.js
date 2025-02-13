
import './App.css';
import Consumer from './Consumer';
import { Provider } from './Provider';
import Counter from './Counter';
import Mounting from './mounting';
import Useref from './Useref';


function App() {

  return (
    <div className="App">
      <Mounting />
   
     <Counter />

     <Provider>
      <Consumer />
     </Provider>

     <Useref />
    </div>
  );
}

export default App;
