import Consumer from './Consumer';
import { Provider } from './Provider';
import Counter from './Counter';
import Mounting from './Mounting';
import Useref from './Useref';
import WishList from './WishList';
import UseState from './UseState';


function App() {
  return (
    <div >
      <Mounting />
   
     <Counter />

     <Provider>
      <Consumer />
     </Provider>

     <Useref />
     <WishList />

     <UseState />
    </div>
  );
}

export default App;
