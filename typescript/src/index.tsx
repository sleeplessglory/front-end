import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './sass/style.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);