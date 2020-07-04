// example Layout.js
import React from 'react'
import '../themes/css/prism.css'

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
        <div><span>({ typeof window !== `undefined` ?  window.location.pathname.replace('/', '') : 0 })</span></div>
        <div><span>Dan Goslen</span></div>
      </div>
    </div>

  )
}

export default Preso
