import React from 'react'

export default function Alert(props) {

  // const capatalize = (word) =>{
  //   const low = word.toString.toLowercase();
  //   return low.charAt(0).toUpperCase + low.slice(1);
  // }
  return (
    props.alert && <div>
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert">
  <strong>{props.alert.type}</strong> {props.alert.msg}
  </div>
 
    </div>
  )
}
