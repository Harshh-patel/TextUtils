import React,{ useState } from 'react'

export default function TextForm(props) {

    const handleUpClick=()=>{
        //   alert("u have clicked the button" + " "+ text)
          let newText=text.toUpperCase()    
          setText(newText) 
          props.showAlert("Converted To Uppercase","Success")

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    }

    const handleOnChange=(event)=>{
        // console.log('onchange')
        setText(event.target.value)
    }

    const handleDownClick=()=>{
        let newText=text.toLowerCase()    
        setText(newText)
        props.showAlert("Converted To Lowercase","Success")
    }
    const handleClear=()=>{
        let newText=" "
        setText(newText)
    }
    const handleCopy=()=>{
        let Text=document.getElementById("myBox")
        Text.select();
        Text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(Text.value)
        props.showAlert("Copied To Clipboard","Success")

    }

    const handleSpace=()=>{
        let Text= text.replace(/  +/g, ' ');
        setText(Text)
        props.showAlert("Extra Space Removed","Success")
    }


   const[text,setText] = useState("")
  /*  text="abccdefghi"  *///wrong way to change the text 
  // setText("text changed ")

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
       
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'white':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
        
        <button className="btn btn-secondary mx-2 my-2" onClick={handleDownClick}>CONVERT TO LOWERCASE</button>
        <button className="btn btn-warning mx-2 my-2" onClick={handleClear}>CLEAR</button>
        <button className="btn btn-success mx-2 my-2" onClick={handleCopy}>COPY TEXT</button>
        <button className="btn btn-danger mx-2 my-2" onClick={handleSpace}>REMOVE EXTRA SPACES</button>
        
    </div>
    <div className='container'>
        <h1>Your text summary</h1>
        <p>{(text.split(" ").filter((element)=>{return element.length!==0}).length)} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} required to read this</p>
         <h3>Preview</h3>
        <p>{text.length>0?text:"your text will be shown here"}</p>
    </div>

    </>
)
}
