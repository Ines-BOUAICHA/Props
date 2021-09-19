import React from 'react';
import Profile from './profile/Profile'
import myImage from './myimage.jpg'

import './App.css';

function App() {
  const commonProps= [{id:'1',FullName:'Ines BOUAICHA', Bio:'https://www.linkedin.com/in/in%C3%A8s-bouaicha//', Profession:'Docteur en Chimie Organique '}];
const handleName=()=>{
    alert('Ines BOUAICHA')
  }

  return (
      <Profile data={commonProps} hand={handleName()} > 
      <img src={myImage}/> 
      </Profile>
  );
}

export default App;