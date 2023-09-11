
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import React, { useState } from 'react';
 import Alert from './components/Alert';
 

 


export default function App() {
   
  const[mode,setMode]=useState('light')
  const[mod,setMod]=useState('dark')
  const[alert,setAlert]=useState(null)

  const showAlert=(message,type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(() => {
      setAlert(null)
      
     }, 2000);
  }
  

   const toggleMode=()=>{
    if(mode==='light')
    { document.body.style.backgroundColor='#042743'
     document.body.style.color='white'
     showAlert("dark mode is enabled","success")
      setMode('dark')
      setMod('light')
      setInterval(() => {
        document.title="TextUtils is the best App"
      }, 2000);
      setInterval(() => {
        document.title="Download TextUtils now"
      }, 2000);

    } 
    else{
      document.body.style.backgroundColor='white'
      document.body.style.color='#042743'
      showAlert("light mode is enabled","success")
      setMod('')
      setMode('light')
    }    
  }

  return (<>
  
  
<Navbar title= "TextUtils"  aboutText="About TextUtils " mod={mod} mode={mode} toggleMode={toggleMode}/>
{/* <Navbar/>   */}
<Alert alert={alert}/>
<div className="container my-3" >

          <TextForm  showAlert={showAlert}heading="Enter the text to analyze"   mode={mode}/><br />

<br />
<br />
 <About mode={mode}/>

</div>

  </>
  );
}


