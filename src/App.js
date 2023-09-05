import './App.css';
// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function App() {
  const store = useSelector(store => store);
  console.log(store);
  const dispatch = useDispatch();


  return (
    <div className="App">
      <p></p>
    </div>
  );
}

export default App;
