import React, {useState} from "react";


export default function TextForm(props) {

    const handleUpClick = () =>{
        setText(text.toUpperCase({text}))
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter text:");

  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="textForm" rows="8" />
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
  );
}
