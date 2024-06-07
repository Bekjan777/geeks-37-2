import './App.css';
import Button from './components/Button';
import User from './components/User';
import Rate from "./components/Rate/Rate";

const Text = () => {
    return <div>
        lesson1
    </div>
}

function App() {
    const b = 10
  return (
    <div className="App">
      <h1>hello</h1>
        <Text/>
        <Button>{b}</Button>
        <Button>close</Button>
        <Button>edit</Button>
        <Button>Hello World!</Button>
        <User name={'Bekzhan'} age={14} phone={`+996 557 81 91 99`}/>
        <Rate amount={5}/>
    </div>
  );
}

export default App;

