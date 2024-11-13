// main.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { registerSW } from 'virtual:pwa-register';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// Register the service worker
registerSW({
    onOfflineReady() {
        console.log('App is ready to work offline.');
    },
});