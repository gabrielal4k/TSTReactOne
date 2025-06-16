
import Fruits from './components/Fruits.jsx';
import Hello from './components/Hello.jsx'
import ConditionalComponent from './components/ConditionalComponent.jsx';
import Message from './components/Message.jsx';
import Counter from './components/Counter.jsx';
import Form from './components/Form.jsx';

function App() {


  const person ={
    name: "Adoib",
    message: "Hi There",
    seatNumber: [1,2,3,4,5,6]
  };

  return <div className="App">
      <div>
        <Form />
      </div>
    </div>;
}

export default App
