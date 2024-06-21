import './App.css';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import TodoPage from "./pages/todoPage/TodoPage";


function App() {
    const links = [
        'Home','Home', 'About us', 'Contacts'
    ]
    return (
        <div className="App">
            <Header links={links}/>
            {/*<Main/>*/}
            <TodoPage/>
            <Header links={links}/>
        </div>
    );
}


export default App;

