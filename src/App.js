import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './Components/MainComponent'
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';

const store = ConfigureStore();

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Provider store={store}>
          <Main />
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
