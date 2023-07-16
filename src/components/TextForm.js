import React, {useState} from "react";


export default function TextForm(props) {

    const handleUpClick = () =>{
        setText(text.toUpperCase({text}))
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleLoClick = () =>{
        setText(text.toLowerCase({text}))
        props.showAlert("Converted to LowerCase", "success");
    }

    const clearText = () =>{
        setText('')
        props.showAlert("Cleared Text", "success");
    }

    const handleTitleClick = () =>{
        setText(text.split(' ')
        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(' ')
        )
        props.showAlert("Converted to TitleCase", "success");
    }

    const handleCopy = () => {
      let text = document.getElementById("myBox");
      text.select();
      text.setSelectionRange(0, 9999);
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard", "success");
    }

    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra Spaces Removed", "success");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const [text, setText] = useState("");

    return (
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} rows="8" />
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleTitleClick}>Convert to TitleCase</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
      <div className="container my-5" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in textarea to preview"}</p>
      </div>
    </div>
    );
}