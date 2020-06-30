// example Layout.js
import React from 'react'

const Preso = ({ children }) => {
  return (
    <div
        style={{
          width: '75vw',
          height: '80vh',
        }}
    >
      <div>{children}</div>
      <div
        style={{
          position: `fixed`,
          bottom: `0px`,
          left: `0px`,
          padding: `10px`,
          display: `flex`,
          width: `100%`,
          flexFlow: `row wrap`,
          justifyContent: `space-between`,
          fontSize: `.6em`,
          opacity: `.6`
        }}
      >
        <div><span>{window.location.pathname.replace('/', '')}</span></div>
        <div><span>Dan Goslen</span></div>
      </div>
    </div>

  )
}

export default Preso
