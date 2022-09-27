import React,{useState} from 'react'

export default function Textform(props) {
    
    const handleOnchange=(event)=>{
        setText(event.target.value)
        
    }
    const upperCase=()=>{
        let newtext=text.toUpperCase()
        setText(newtext)
        props.showAlert('Converted to UpperCase')
    }
    const lowerCase=()=>{
        let newtext=text.toLowerCase()
        setText(newtext)
        props.showAlert('Converted to LowerCase')
    }
    const clear=()=>{
        let newtext=""
        setText(newtext)
        props.showAlert('Text Cleared')
    }
    const copyText=()=>{
        let text=document.getElementById('myBox');
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to Clipboard')
    }
    const extraSpaces=()=>{
        let extraSpaces=text.split(/[ ]+/);
        setText(extraSpaces.join(" "))
        props.showAlert('Extra spaces removed')

    }   
    const [text,setText]=useState('Enter text here');
    return (
        <>  
        <div className='container' style={{color:props.mode==='light'?'#333741':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
            
                <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8" style={{backgroundColor:props.mode==='light'?'white':'#333741' ,color:props.mode==='light'?'#333741':'white'}}></textarea>
            </div>
            <button className="btn btn-success mx-2" onClick={upperCase}>Convert to UpperCase</button>
            <button className="btn btn-success " onClick={lowerCase}>Convert to LowerCase</button>
            <button className="btn btn-success mx-2" onClick={clear}>Clear</button>
            <button className="btn btn-success mx-2" onClick={copyText}>Copy Text</button>
            <button className="btn btn-success mx-2" onClick={extraSpaces}>Remove Extra Spaces</button>
        </div>
        
       <div className='container my-3' style={{color:props.mode==='light'?'#333741':'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008*text.split(' ').length} minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:'Enter something in the text box above to preview it here'}</p>
       </div>
        </>
  )
}
