import React, {useState} from "react";


export default function TextForm(props) {

    const handleUpClick = () =>{
        setText(text.toUpperCase({text}))
    }

    const handleLoClick = () =>{
        setText(text.toLowerCase({text}))
    }

    const clearText = () =>{
        setText('')
    }

    const handleTitleClick = () =>{
        setText(text.split(' ')
        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(' ')
        )
    }


    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const [text, setText] = useState("");

    return (
    <div className="container">
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="textForm" rows="8" />
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleTitleClick}>Convert to TitleCase</button>
      <div className="container my-5">
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.length} Minutes read</p>
        <h2>Preview Text</h2>
        <p>{text}</p>
      </div>
    </div>
    );
}