import React from 'react';
import './App.css';
import  World from  './World';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <Box>
      <Button>sdfsfs</Button>
      <Button>sdfsfs</Button>
      <Button>sdfsfs</Button>
      </Box>
      <World  width={500} height={500} />
    </div>
  );
}

export default App;
