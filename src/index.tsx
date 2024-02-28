import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import { houseList } from './mocks/offers.ts';
import { NUMBER_HOUSING_ITEM } from './const/const.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App houseArray = { houseList } numberItems={NUMBER_HOUSING_ITEM} />
  </React.StrictMode>,
);
