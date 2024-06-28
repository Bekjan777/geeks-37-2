import './App.css';
import Main from './pages/main/Main';
import Header from './components/header/Header';
import TodoPage from "./pages/todoPage/TodoPage";
import Form from "./components/Form/Form";
import Fetch from "./components/fetch/Fetch";
import FormAxios from "./components/formAxios/FormAxios";


function App() {
    const links = [
        'Home','Home', 'About us', 'Contacts'
    ]
    return (
        <div className="App">
            <Header links={links}/>
            {/*<Main/>*/}
            {/*<TodoPage/>*/}

            <Form/>
            <Fetch/>
            <FormAxios></FormAxios>
            <Header links={links}/>
        </div>
    );
}


export default App;

