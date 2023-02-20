import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import   { faClock } from "@fortawesome/free-regular-svg-icons";

function Icondigit() {
  return (
    <div className="display-1 text-white text-center col-sm"><p className="mt-3 border border-3 rounded"><FontAwesomeIcon icon={faClock} /></p></div>
  )
}

export default Icondigit