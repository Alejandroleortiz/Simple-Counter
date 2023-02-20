import React from 'react'

function Digits(props) {
  return (
    <div className="display-1 text-white text-center col-sm"><p className="mt-3 border border-3 rounded">{props.children}</p></div>
  )
}

export default Digits