import React from 'react';
import './App.css';
import MenuFr from './menu';
import  World from  './World';
import GitHubForkRibbon from 'react-github-fork-ribbon'; 
import { Menu } from 'material-ui';

function App() {
  return (
    <div>
      <MenuFr />     
      <World  width={1400} height={735} />
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
