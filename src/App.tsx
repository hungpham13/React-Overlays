import { useState } from 'react';
import './App.css';
import { FullscreenOverlayDemo, PopupOverlayDemo } from './components/OverlayDemos';
import logo from './tsw.png';

function App() {
    const [fullscreenOpen, setFullscreenOpen] = useState(false);
    const [popupOpen, setPopupOpen] = useState(false);

    return (
        <div id='container'>
            <h1>Overlays in ReactJS</h1>
            <img src={logo} alt='Soggy Waffle' width='300' />
            <div id='menu'>
                <button onClick={() => setFullscreenOpen(true)}>Fullscreen</button>
                <button onClick={() => setPopupOpen(true)}>Popup</button>
            </div>
            <FullscreenOverlayDemo open={fullscreenOpen} onClose={() => setFullscreenOpen(false)} />
            <PopupOverlayDemo open={popupOpen} onClose={() => setPopupOpen(false)} />
        </div>
    );
}

export default App;
