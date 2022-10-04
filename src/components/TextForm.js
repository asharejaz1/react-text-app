import React, {useState} from 'react'
import propTypes from 'prop-types'


export default function TextForm(props) {

  const convertUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success")
  }

  const convertLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success")
  }

  const clearText = () => {
    setText("");
    props.showAlert("All text cleared!", "success")
  }

  const changeVal = (event) => {
     setText(event.target.value)
  }

  const copyClipboard = () => {
    let text = document.getElementById("exampleFormControlTextarea1")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to Clipboard!", "success")
  
  }

  const extraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("All extra spaces removed!", "success")
  }

  const [text, setText] = useState('');

  return (
    <>
    <div className="container my-5">
      <div className="container my-3" style={{color: props.mode==='dark'? 'white': 'black'}}>
        <h1>{props.heading}</h1>

        <form>
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1"></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="20" placeholder="Enter Text Here" value={text} onChange={changeVal} style={{backgroundColor: props.mode === 'dark'?'#181818':'white', color: props.mode === 'dark'?'white':'black'}} spellCheck="true"></textarea>
            </div>
        </form>

        <button className="btn btn-success mx-1 my-2" onClick={copyClipboard}>Copy Text</button>
        <button className="btn btn-dark mx-1 my-2" onClick={convertUpper}>Convert to UpperCase</button>
        <button className="btn btn-dark mx-1 my-2" onClick={convertLower}>Convert to LowerCase</button>
        <button className="btn btn-dark mx-1 my-2" onClick={extraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-danger mx-1 my-2" onClick={clearText}>Clear Text</button>
        

      </div>

      <div className="container " style={{color: props.mode==='dark'? 'white': 'black'}}>
          
          <p>{text.split(" ").filter((element) => element.length!==0).length} words and {text.length} characters</p>

      </div>
    </div>
    </>
  )
}
