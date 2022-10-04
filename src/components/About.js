import React, {useState} from 'react'
import propTypes from 'prop-types'


export default function About(props) {

  return (
    <>
    <div className="container my-2">
    <div className="container my-3">
        <h1 style={{color: props.mode === 'dark'?'white':'black'}} className="my-4">About Functions</h1>
        <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{backgroundColor: props.mode === 'dark'?'#181818':'white', color: props.mode === 'dark'?'white':'black'}}>
                About UpperCase Function
            </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'?'#181818':'white', color: props.mode === 'dark'?'white':'black'}}>
            <strong>Convert to UpperCase Function</strong> converts each and every character to an uppercase character for example <strong>"ashar"</strong> would become <strong>"ASHAR"</strong>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={{backgroundColor: props.mode === 'dark'?'#181818':'white', color: props.mode === 'dark'?'white':'black'}}>
                About LowerCase Function
            </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'?'#181818':'white', color: props.mode === 'dark'?'white':'black'}}>
            <strong>Convert to LowerCase Function</strong> converts each and every character to a lowercase character for e.g <strong>"ASHAR"</strong> would become <strong>"ashar"</strong>
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={{backgroundColor: props.mode === 'dark'?'#181818':'white', color: props.mode === 'dark'?'white':'black'}}>
                About Remove Extra Spaces Function
            </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'?'#181818':'white', color: props.mode === 'dark'?'white':'black'}}>
            <strong>Remove Extra Spaces Function</strong> detects if there is more than 1 space between words and remove that extra space between the words for e.g <strong>"my   name"</strong> would become <strong>"my name"</strong>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}
