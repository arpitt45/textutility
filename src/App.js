

import { useState } from 'react';
import './App.css';
// import Footer from './components/Footer';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import Home from './components/Home';
// import Result from './components/Result';
// import Profile from './components/Profile';
// import RecentTest from './components/RecentTest';

function App() {
  const [mode, setmode] = useState('dark');
  const [alert, setalert] = useState('null');
  
  const showalert = (message,type) =>{
    setalert({
      msg:message,
      type:type
    })
    setInterval(() => {
      setalert('null');
        
    }, 3000);
  
  }

   const togglemode = () =>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor='#032849 ';
      showalert("dark mode has been enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("light mode has been enabled","success");

    }
  }


  
  
  return (
    <>
    <Navbar title="Textutils"  mode={mode} togglemode={togglemode} />
    <Alert  alert={alert}/>
     <div className="container mb-3">  
    <TextForm heading="Enter the Text to analize" mode={mode} togglemode={togglemode} />
    </div> 
      

    
     

    </>
    

  );
}

export default App;
