import './App.css';
import Button from './components/Button';
import User from './components/User';

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
        <Button text={b}/>
        <Button text={'open'}/>
        <Button text={'close'}/>
        <Button text={'edit'}/>
        <User name={'Bakyt'} age={18} phone={468465165146}/>
    </div>
  );
}

export default App;

