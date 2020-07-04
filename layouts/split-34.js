import React from 'react'

const Split34 = ({ children }) => {
  return (
    <div style={{
          display: `flex`,
          justifyContent: `space-between`,
        }}>
      <div style={{ textAlign: `left`, width: `75%`}}>{children[0]}</div>
      <div style={{ textAlign: `left`, width: `25%`}}>{children[1]}</div>
    </div>
  )
}

export default Split34
