import React from 'react'
import "./style.scss"
const Subnav = ({title}) => {
  return (
    <div className="sub__nav">
        <h3 className="sub__text">
            {title}
        </h3>
    </div>
  )
}

export default Subnav