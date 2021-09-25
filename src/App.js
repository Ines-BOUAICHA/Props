import React from 'react';
import Profile from './profile/Profile';
import myImage from './photo.jpg';

import './App.css';

function App() {
  const commonProps= [{id:'1',
  FullName:'Ines BOUAICHA',
   Bio:'https://www.linkedin.com/in/in%C3%A8s-bouaicha//', 
   Profession:'Docteur en Chimie Organique '}];
   
const handleName=(event)=>{
          event.preventDefault()
 
          alert(' Hello I am Ines')
  };

  return (

      <Profile data={commonProps} handle={handleName} > 
      
      <img src={myImage} alt="pic"/> 

      </Profile>
  );
}

export default App;