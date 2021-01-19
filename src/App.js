import React from 'react'
import routes from './routes'
import Header from './components/header/Header'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;
