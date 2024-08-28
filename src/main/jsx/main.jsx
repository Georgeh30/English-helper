import React from 'react'
import ReactDOM from 'react-dom/client'

import '@styles/global.css';

// Importa Provider y el store de Redux
import { Provider } from 'react-redux';
import { store } from '@store';

import App from '@app/jsx/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
