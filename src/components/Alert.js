import React from 'react'
import propTypes from 'prop-types'

const capt = (str) => {
  const newStr = str.charAt(0).toUpperCase() + str.slice(1)
  return newStr
}

export default function Alert(props) {
  return (
    props.alert && <div>
        <div className={`alert alert-${props.alert.type}`} role="alert">
            <strong>{capt(props.alert.type)}</strong> : {props.alert.msg}
        </div>
    </div>
  )
}
