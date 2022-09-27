// import logo from './logo.svg';
import React, { useState } from 'react'

import './App.css';

import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';

// --------React Router Import-------------------
// Upgrade the syntax and replace “Switch” with “Routes” and “component” with “element’

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
  
// } from "react-router-dom";


function App() {
  const [Mode, setMode] = useState('light')
  
  const toggleMode = () => {
      
        if (Mode ==='light'){
          setMode('dark')
         document.body.style.backgroundColor='#333741';
        showAlert('DarkMode has been Enabled')
        }else{
          setMode('light')
          document.body.style.backgroundColor='white';
          showAlert('DarkMode has been Disabled')
        }
  }
//------------------------------------------------------------------------------------ 

const [allert, setAlert] = useState(null);

const showAlert=(message)=>{
  setAlert({msg:message
  })
  setTimeout(() => {
    setAlert()
  }, 1500);  
    
}


return (
  <>
  
  {/* ?<Router Basename="/Text UtiL-Ls"> */}
     <Navbar title="Text UtiL-Ls"  aboutText="About Us" mode={Mode} toggleMode={toggleMode}/>
     <Alert alert={allert}/> 
     {/* upr jo (alert=)<== yeh Alert.js me pass hoga props me */}
     <div className="container my-3" >
     {/* <Routes> */}
          {/* <Route exact path="/about" */}
          {/* element={ */}
          {/* <About/> */}
          {/* }/> */}
                       
       
          
          {/* <Route exact path="/" */}
          {/* element={ */}
            <Textform  showAlert={showAlert} heading="Enter the text to Analyze" mode={Mode}/>
            {/* } /> */}
                 
       
    {/* </Routes> */}
     
     </div>
     
  
     {/* </Router>    */}
  </>
  
);
}

export default App;


  
  
  
  
 
  // 33,37,41;
  
  
