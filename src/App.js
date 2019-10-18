import React from 'react';
import './App.css';
import  World from  './World';
var GitHubForkRibbon = require('react-github-fork-ribbon'); 
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
      <GitHubForkRibbon position="right" 
                        color="green"
                        href="//github.com/jessy1092/react-github-fork-ribbon" 
                        target="_blank" > 
        Fork me on GitHub 
      </GitHubForkRibbon> 
    </div>
  );
}

export default App;
