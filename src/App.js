import React from 'react';
import './App.css';
import  World from  './World';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import GitHubForkRibbon from 'react-github-fork-ribbon'; 

function App() {
  return (
    <div className="App">
      <Box>
      <Button href="/documentation">Documentation</Button>
      <Button href="/howtodevelop">How to develop</Button>
      <Button href="/statistic">Statistic</Button>
      </Box>
      <World  width={500} height={500} />
      <GitHubForkRibbon position="right" 
                        color="red"
                        href="https://github.com/skillful-alex/krugi" 
                        target="_blank" > 
        Fork me on GitHub 
      </GitHubForkRibbon> 
    </div>
  );
}

export default App;
