import './App.css';
import logo from './tsw.png';

function App() {
    return (
        <div id='container'>
            <img src={logo} alt='Soggy Waffle' width='300' />
            <div id='menu'>
                <button>Fullscreen</button>
                <button>Popup</button>
                <button>Alert</button>
                <button>Confirm</button>
                <button>Prompt</button>
            </div>
        </div>
    );
}

export default App;
