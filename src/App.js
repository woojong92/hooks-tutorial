import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import Info from './Info'
import Average from './Average'

function App() {
  const [visible, setVisible] = useState(false)
  return (
      <Average/>
    );
}

export default App;
