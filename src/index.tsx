import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import { houseList } from '../src/fake-data/fake-data.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App houseArray = { houseList} />
  </React.StrictMode>,
);
